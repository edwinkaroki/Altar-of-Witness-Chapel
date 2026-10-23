#!/usr/bin/env node

/**
 * Background removal script using sharp and color-convert
 * Install: npm install sharp
 */

const sharp = require('sharp');
const path = require('path');

async function removeBackground() {
  const inputPath = path.join(__dirname, 'images', 'images (2).jpeg');
  const outputPath = path.join(__dirname, 'images', 'awc-logo.png');

  try {
    // Read image and extract pixels
    const image = sharp(inputPath);
    const { data, info } = await image
      .raw()
      .toBuffer({ resolveWithObject: true });

    // Create a copy for processing
    const newData = Buffer.alloc(data.length);
    
    // Process each pixel (assuming RGB or RGBA)
    const pixelSize = info.channels;
    for (let i = 0; i < data.length; i += pixelSize) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      // If pixel is very light (background), make transparent
      if (r > 150 && g > 150 && b > 150) {
        newData[i] = 255;     // R
        newData[i + 1] = 255; // G
        newData[i + 2] = 255; // B
        newData[i + 3] = 0;   // A (transparent)
      } else {
        newData[i] = r;
        newData[i + 1] = g;
        newData[i + 2] = b;
        newData[i + 3] = 255; // A (opaque)
      }
    }

    // Save as PNG with transparency
    await sharp(newData, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4
      }
    })
    .png()
    .toFile(outputPath);

    console.log(`✓ Background removed! Saved to: ${outputPath}`);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

removeBackground();
