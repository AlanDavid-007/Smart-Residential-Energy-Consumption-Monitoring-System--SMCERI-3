import React, { useEffect, useRef } from "react";
import tinymce from "tinymce";


const TinyMCEEditor = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      tinymce.init({
        target: editorRef.current,
        plugins: "preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons accordion",
        menubar: "file edit view insert format tools table help",
        toolbar: "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | align numlist bullist | link image | table media | outdent indent | code fullscreen preview | save print | pagebreak anchor codesample",
        autosave_ask_before_unload: true,
        height: 600,
      });

      return () => tinymce.remove(editorRef.current); // Cleanup on unmount
    }
  }, []);

  return <textarea id="tinymce-editor" ref={editorRef}></textarea>;
};

export default TinyMCEEditor;
