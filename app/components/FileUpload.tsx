"use client";
import { useState } from "react";
import { IKUpload } from "imagekitio-next";
import { IKUploadResponse } from "imagekitio-next/dist/types/components/IKUpload/props";

export default function FileUpload() {

    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    return (
        <div>FileUpload</div>
    )
}