import React, {createRef, useEffect } from 'react';


function DropArea({class_name, name, onDrop, children}) {
    const area = createRef()

    const preventDefault = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    const highlight = (e) => {
        e.target.classList.add("highlight")
    }

    const unhighlight = (e) => {
        e.target.classList.remove("highlight")
    }

    useEffect(() => {
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            area.current.addEventListener(eventName, preventDefault, false)
        })

//        ['dragenter', 'dragover'].forEach(event => {
//            area.current.addEventListener(event, highlight, false)
//        })
//
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


    return (
    <div className={class_name} ref={area}>
        {children}
    </div> 
    );
}

export default DropArea;