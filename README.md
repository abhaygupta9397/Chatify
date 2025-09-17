# Chatify 💬  
A Full-Stack, Real-Time Chat Application  

This project is a complete, full-stack real-time chat application built from the ground up.  
It serves as a feature-rich messaging platform ,implementing everything from user authentication to real-time communication and security.  

---

## ✨ Features
- 🔐 **Custom Authentication**: Secure registration and login system built from scratch.  
- 💬 **Real-Time Messaging**: Instant, bi-directional communication using **Socket.io**.  
- 🟢 **User Presence**: Online/offline indicators for active users.  
- 🖼️ **Image Sharing**: Upload and share images in chat.  
- 🔔 **Notifications**: Sound alerts for new messages.  
- 🛡️ **API Rate Limiting**: Prevents abuse and secures the server.  
- 📧 **Email Integration**: Sends welcome emails to new users.  
- 📐 **Scalable Architecture**: Clean separation of frontend and backend for future growth.  

---

## 🛠️ Tech Stack

### Frontend
- **React** – Component-based UI library.  
- **Tailwind CSS** – Utility-first CSS framework for styling.  
- **DaisyUI** – Tailwind-based component library.  
- **Zustand** – Lightweight state management.  

### Backend
- **Node.js + Express** – Server-side runtime and framework.  
- **Socket.io** – Real-time, event-based communication.  
- **MongoDB** – NoSQL database for users and messages.  
- **Arcjet** – Security layer for API protection & rate limiting.  
- **Resend** – Transactional email service.  
- **Cloudinary** – Cloud-based image storage and serving.  
- **JWT (JSON Web Tokens)** – Stateless authentication.  

---

## 🔒 What is Arcjet and Rate Limiting?

### **Rate Limiting**
A critical security measure that controls how many requests a client can make to an API within a set timeframe. It helps in:
- 🚫 **Preventing Abuse**: Blocks brute-force or DoS attacks.  
- ⚖️ **Ensuring Fair Usage**: Prevents one user from hogging resources.  
- 🔐 **Protecting APIs**: Keeps the app stable and available under load.  

### **Arcjet**
Arcjet is a developer-friendly platform to easily implement rate limiting and API protections without complex infrastructure (like Redis).  
With its SDK, you can define rules that block or limit suspicious requests—keeping your app safe with minimal setup.  

---


