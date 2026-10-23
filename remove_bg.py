#!/usr/bin/env python3
"""
Remove background from the AWC logo image
Requires: pip install pillow
"""

from PIL import Image
import os

def remove_background(input_path, output_path):
    """Remove the background from an image by converting white/light colors to transparent"""
    
    # Open the image
    img = Image.open(input_path).convert('RGBA')
    
    # Get image data
    data = img.getdata()
    
    # Create new image data with transparency
    new_data = []
    for item in data:
        # If pixel is very light (white/light background), make it transparent
        # Adjust the threshold (150) to control sensitivity
        if item[0] > 150 and item[1] > 150 and item[2] > 150:
            new_data.append((255, 255, 255, 0))  # Transparent
        else:
            new_data.append(item)
    
    # Update image data
    img.putdata(new_data)
    
    # Save as PNG with transparency
    img.save(output_path, 'PNG')
    print(f"✓ Background removed! Saved to: {output_path}")

if __name__ == '__main__':
    input_file = 'images/images (2).jpeg'
    output_file = 'images/awc-logo.png'
    
    if os.path.exists(input_file):
        remove_background(input_file, output_file)
    else:
        print(f"Error: {input_file} not found")
