"use client";
import { useState } from "react";
import { IKUpload } from "imagekitio-next";
import { IKUploadResponse } from "imagekitio-next/dist/types/components/IKUpload/props";

export default function FileUpload({onSuccess}: {onSuccess: (response: IKUploadResponse) => void}) {

    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const onError = (error: {message:string}) => {

        setError(error.message);
        setUploading(false);
        
    }
    return (
        <div>FileUpload</div>
    )
}