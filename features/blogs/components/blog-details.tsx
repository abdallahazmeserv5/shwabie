"use client";

import React from "react";
import { motion } from "framer-motion";
import ImageFallback from "@/components/image-fallback";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import { BlogDetails as BlogDetailsType } from "@/features/blogs/types";

export default function BlogDetails({
  blogDetails,
}: {
  blogDetails: BlogDetailsType;
}) {
  return (
    <section className="container mx-auto px-4 my-10 ">
      {/* Header Image */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative overflow-hidden rounded-2xl shadow-lg h-[300px] sm:h-[400px]"
      >
        <ImageFallback
          src={blogDetails.author_image}
          alt={blogDetails.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
      </motion.div>

      {/* Blog Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <Card className="mt-8 border-none shadow-lg rounded-2xl">
          <CardContent className="p-6 sm:p-10">
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4 leading-tight">
              {blogDetails.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{blogDetails.created_at}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>
                  {blogDetails.city}, {blogDetails.country}
                </span>
              </div>
              <Badge variant="outline" className="rounded-full px-3 py-1">
                {blogDetails.created_by}
              </Badge>
            </div>

            <Separator className="my-6" />

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-base sm:text-lg leading-relaxed text-muted-foreground"
            >
              {blogDetails.content}
            </motion.div>

            <Separator className="my-8" />

            {/* Author */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <Avatar className="w-14 h-14">
                <AvatarImage src={blogDetails.author_image} />
                <AvatarFallback>{blogDetails.created_by[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-lg">
                  {blogDetails.created_by}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {blogDetails.city}, {blogDetails.country}
                </p>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
