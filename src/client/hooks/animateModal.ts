
import React, {useRef, useEffect, useState} from 'react'
import { useAnimateModalHook } from '../models/hooks'

export const useAnimateModal: useAnimateModalHook = (animateClass, open) => {
    
    const modal = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if(!open){
            const animate = setTimeout(()=>{modal.current?.classList.remove(animateClass)}, 0)
            
            return () => {clearTimeout(animate)}
    }   else {
        const animate = setTimeout(()=>{modal.current?.classList.add(animateClass)}, 0)
            
            return () => {clearTimeout(animate)}
    }    
    },  [open]
  );
  return modal
}