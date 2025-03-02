"use client"
import { useRouter } from "next/navigation";
import { type ElementRef, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const dialogRef = useRef<ElementRef<'dialog'>>(null);

    useEffect(() => {
        if(!dialogRef.current?.open){
            dialogRef.current?.showModal();
        }
    }, []);

    function onDismiss(){
        router.back();
    }

    return createPortal(
        <dialog
            ref={dialogRef}
            className="w-screen h-screen bg-black/50 text-white"
            onClose={onDismiss}
        >
            {children}
            {/* <button onClick={onDismiss} className="close-button"/> */}
        </dialog>,
        // <div className="modal-backdrop">
        // </div>,
        document.getElementById("modal-root")!,
    )
}