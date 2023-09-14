import React, {createRef, useEffect } from 'react';


function DropArea({class_name, name, onDrop, children}) {
    const area = createRef()

    const preventDefault = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    useEffect(() => {
        area.current.addEventListener("dragenter", preventDefault, false)
        area.current.addEventListener("dragover", preventDefault, false)
        area.current.addEventListener("dragleave", preventDefault, false)
        area.current.addEventListener("drop", preventDefault, false)
        area.current.addEventListener("dragenter", higlight, false)
        area.current.addEventListener("dragover", higlight, false)
        area.current.addEventListener("dragleave", unlight, false)
        area.current.addEventListener("drop", unlight, false)

        area.current.addEventListener("drop", handleDrop, false)
    })

    // The Drop are needs to be modified to it can handle files with the same name. Should have a ID!
    const handleDrop = (e) => {
        let dt = e.dataTransfer
        let files = dt.files
        handleFiles(files)
    }

    const handleFiles = (files) => {
        onDrop({name: name, files: files})
    }

    const higlight = (e) => {
        e.target.classList.add("highlight")
    }

    const unlight = (e) => {
        e.target.classList.remove("highlight")
    }

    return (
    <div className={class_name} ref={area}>
        {children}
    </div> 
    );
}

export default DropArea;