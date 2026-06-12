import tkinter as tk
from tkinter import messagebox

# 1. Create the main window
root = tk.Tk()
root.title("My First GUI")
root.geometry("300x200")

# 2. Define what happens when the button is clicked
def on_button_click():
    messagebox.showinfo("Success!", "You clicked the button!")

# 3. Create a label (text)
label = tk.Label(root, text="Welcome to my app!", font=("Arial", 14))
label.pack(pady=20)

# 4. Create a button
button = tk.Button(root, text="Click Me", command=on_button_click, bg="blue", fg="white")
button.pack(pady=10)

# 5. Start the application loop
root.mainloop()
