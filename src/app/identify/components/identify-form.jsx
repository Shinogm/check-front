"use client"
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import React, { createContext } from 'react';

export function IdentifyForm() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 px-4 md:px-6"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mx-auto max-w-md w-full space-y-8"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.4, duration: 0.5 }}
          className="space-y-4 text-center"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.6, duration: 0.5 }}
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900"
          >
            <FingerprintIcon className="w-6 h-6" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-3xl font-bold"
          >
            Identify Worker
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 1, duration: 0.5 }}
            className="text-gray-500 dark:text-gray-400"
          >
            Scan your fingerprint to identify the worker
          </motion.p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex justify-center"
        >
          <Button className="w-full" variant="primary">
            <FingerprintIcon className="mr-2 h-5 w-5" />
            Identify Worker with Fingerprint
          </Button>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 1.4, duration: 0.5 }}
          className="bg-white dark:bg-gray-950 shadow-lg"
        >
          <CardHeader className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage alt="Worker" src="/placeholder-avatar.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h3 className="text-lg font-medium">John Doe</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">john.doe@acme.com</p>
            </div>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-sm text-gray-500 dark:text-gray-400">Working Hours</p>
              <p>9:00 AM - 5:00 PM</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-500 dark:text-gray-400">Telephone</p>
              <p>+1 (555) 555-5555</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-500 dark:text-gray-400">Company</p>
              <p>ACME Inc.</p>
            </div>
          </CardContent>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

function FingerprintIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4" />
      <path d="M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2" />
      <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
      <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
      <path d="M8.65 22c.21-.66.45-1.32.57-2" />
      <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
      <path d="M2 16h.01" />
      <path d="M21.8 16c.2-2 .131-5.354 0-6" />
      <path d="M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2" />
    </svg>
  )
}
