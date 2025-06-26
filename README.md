🥗 Recipe Generator: AI-Powered Ingredient Detection and Recipe Suggestion

An end-to-end application that takes a photo of your ingredients, detects them using object detection, and generates editable recipe suggestions from the web. Perfect for when you’re staring at your fridge, unsure what to cook!

📸 Features
Ingredient Detection using YOLOv8 with Oriented Bounding Boxes (OBB)
Editable Ingredient List: Easily modify the auto-detected items
AI Recipe Suggestions: Uses web scraping or an API to suggest recipes based on selected ingredients
Responsive UI for smooth interaction
Cloud-Ready: Deployable on AWS

🧩 How It Works
Upload an Image of ingredients (or use a webcam snapshot)
YOLOv8 OBB detects objects and extracts ingredient names
The ingredients are shown in a dynamic list where users can add/remove/edit entries
Based on the list, the system fetches recipes using web scraping or a recipe API
Results are shown with links to full instructions
