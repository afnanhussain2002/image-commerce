"use client";
import { useState } from "react";
import { IKUpload } from "imagekitio-next";
import { IKUploadResponse } from "imagekitio-next/dist/types/components/IKUpload/props";
import { set } from "mongoose";

export default function FileUpload({onSuccess}: {onSuccess: (response: IKUploadResponse) => void}) {

    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const onError = (error: {message:string}) => {

        setError(error.message);
        setUploading(false);
    }
    const handleSuccess = (response: IKUploadResponse) => {
        onSuccess(response);
        setUploading(false);
        setError(null);
    }
    const handleStartUpload = () => {
        setUploading(true);
        setError(null);
    }
    return (
        <div>
            <IKUpload
                fileName="product-image.png"
                onError={onError}
                onSuccess={handleSuccess}
                onUploadStart={handleStartUpload}
                validateFile={(file:File) =>{
               const validTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];
               if (!validTypes.includes(file.type)) {
                setError('Invalid file type');
                return false;
               }
               if (file.size > 5 * 1024 * 1024) {
                setError('File size must be less than 5MB');
                
               }
               return true;
                }}
            />
            {uploading && <p className="text-sm text-gray-500">Uploading...</p>}

            {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
    )
}