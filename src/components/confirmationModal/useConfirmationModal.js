import { useState } from 'react';

export default function useConfirmationModal() {
    const [isVisible, setIsVisible] = useState(false);

    function toggleModal() {
        setIsVisible(!isVisible);
    }

    return {
        isVisible,
        toggleModal
    };
}
