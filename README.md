# Base64 Converter
### Base64 Image and Video Converter

This repository provides a utility to convert images and videos in web pages to Base64 format, primarily for optimization and secure embedding when users land on your site via search engines.

---

### **Features**
1. **Convert Images to Base64**  
   - Converts `<img>` elements with the class `baseto64` into Base64 strings.
   - Automatically processes `<source>` tags within `<picture>` elements.

2. **Convert Videos to Base64**  
   - Converts `<video>` elements with the class `baseto64-video` into Base64 strings.

3. **Search Engine Referrer Detection**  
   - Detects if the user arrived at the page through a search engine (Google, Bing, Yahoo, DuckDuckGo, Baidu, etc.).
   - Runs the conversion only for users referred by search engines.

4. **Automatic Initialization**  
   - Automatically triggers the Base64 conversion process when the DOM is fully loaded.

---

### **How It Works**

1. **Base64 Conversion**
   - The script fetches the `src` or `srcset` of the targeted elements and converts them into Base64 using the `FileReader` API.

2. **Selective Execution**
   - The conversion runs only if the referrer URL matches a search engine, reducing unnecessary processing for direct visits or internal navigation.

3. **Dynamic Processing**
   - Handles both image and video tags dynamically, including multiple sources for responsive images.

---

### **Setup**

1. **Include the Script**  
   Add the script to your HTML file:
   ```html
   <script src="base64-converter.js"></script>
   ```

2. **HTML Structure**
   Ensure your HTML contains elements with appropriate classes:
   ```html
   <picture>
       <source srcset="image.webp" type="image/webp" class="baseto64">
       <img src="image.jpg" alt="example image" class="baseto64">
   </picture>

   <video src="video.mp4" class="baseto64-video" controls></video>
   ```

3. **Automatic Execution**  
   The script will run automatically for users referred by search engines.

---

### **Key Functions**

1. **convertImagesAndVideosToBase64()**  
   - Loops through images and videos with specific classes and converts their URLs to Base64.

2. **convertToBase64(tag, attr)**  
   - Fetches the file from the provided URL and converts it into a Base64 string using the `FileReader` API.

3. **isFromSearchEngine()**  
   - Checks if the user is referred by a search engine using `document.referrer`.

4. **DOMContentLoaded Event**  
   - Ensures the script runs after the DOM is fully loaded, preventing errors caused by uninitialized elements.

---

### **Usage Example**

Add the following code to your page:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Base64 Converter</title>
</head>
<body>
    <picture>
        <source srcset="image.webp" type="image/webp" class="baseto64">
        <img src="image.jpg" alt="example image" class="baseto64">
    </picture>

    <video src="video.mp4" class="baseto64-video" controls></video>

    <script src="base64-converter.js"></script>
</body>
</html>
```

---

### **Limitations**
- **Performance**: Converting large files to Base64 might impact load time.
- **Browser Support**: Ensure modern browsers are used for the `FileReader` API and `fetch`.

---

### **License**
This project is licensed under the MIT License.  
**Copyright Amir Javanmir**  
Released on: Oct 10, 2024
