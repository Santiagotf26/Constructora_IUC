import sys
from PIL import Image

def remove_black_background(input_path, output_path, tolerance=30):
    try:
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()
        
        newData = []
        for item in datas:
            # item is (R, G, B, A)
            if item[0] < tolerance and item[1] < tolerance and item[2] < tolerance:
                # replacing black with transparent
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)
                
        img.putdata(newData)
        
        # Crop to the bounding box to make the logo larger without empty space
        bbox = img.getbbox()
        if bbox:
            img = img.crop(bbox)
            
        img.save(output_path, "PNG")
        print("Success: Background removed and image cropped.")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    remove_black_background(r"C:\Nest.JS\Constructora\public\logo.jpg", r"C:\Nest.JS\Constructora\public\logo.png")
