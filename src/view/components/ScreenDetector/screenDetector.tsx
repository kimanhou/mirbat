import React, { useRef, useEffect, useCallback } from 'react';

interface IScreenDetectorProps {
    onActive : () => void;
    onUnactive ?: () => void;
    className ?: string;
}

const ScreenDetector : React.FC<IScreenDetectorProps> = props => {
    const onActive = props.onActive;
    const onUnactive = props.onUnactive;
    const detectorRef = useRef<HTMLDivElement>(null);
    const isElementInViewport = () => {
        const el = detectorRef.current!;
        var rect = el.getBoundingClientRect();
    
        return (
            (rect.top >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
            (rect.bottom >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) ||
            (rect.top < 0 && rect.bottom > (window.innerHeight || document.documentElement.clientHeight))
        );
    }

    const detects = useCallback(() => {
        if (isElementInViewport()) {
            onActive();
        }
        else if (onUnactive !== undefined){
            onUnactive();
        }
    }, [onActive, onUnactive]);

    useEffect(() => {
        detects();
        window.addEventListener('scroll', detects, false);
        return () => window.removeEventListener('scroll', detects, false);
    }, [detects]);

    return (
            <div className={`screen-detector ${props.className}`} ref={detectorRef}>
            </div>
    );
}

export default ScreenDetector;