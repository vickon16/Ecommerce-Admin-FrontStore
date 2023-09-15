"use client";

import { Tab } from "@headlessui/react";
import { CldImage } from "next-cloudinary";
import { FC } from "react";

import { Image } from "@/types";
import { cn } from "@/lib/utils";

interface GalleryProps {
  images: Image[];
}

const Gallery: FC<GalleryProps> = ({ images = [] }) => {
  return (
    <Tab.Group as="div">
      <Tab.Panels>
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
              <CldImage
                fill
                src={image.imagePublicId}
                sizes="100vw"
                alt="Image"
                className="object-cover object-center"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>

      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <Tab
              className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white"
              key={image.id}
            >
              {({ selected }) => (
                <>
                  <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
                    <CldImage
                      fill
                      src={image.imagePublicId}
                      alt=""
                      className="object-cover object-center"
                    />
                  </span>
                  <span
                    className={cn(
                      "absolute inset-0 rounded-md ring-2 ring-offset-2",
                      selected ? "ring-black" : "ring-transparent"
                    )}
                  />
                </>
              )}
            </Tab>
          ))}
        </Tab.List>
      </div>
    </Tab.Group>
  );
};

export default Gallery;
