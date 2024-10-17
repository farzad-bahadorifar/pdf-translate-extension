import * as pdfjsLib from './pdfjs/pdf.mjs';

// Set the workerSrc to the correct path for the worker
pdfjsLib.GlobalWorkerOptions.workerSrc = chrome.runtime.getURL('pdfjs/pdf.worker.mjs');

// Load and process a PDF file
const loadingTask = pdfjsLib.getDocument('example.pdf');
loadingTask.promise.then(function(pdf) {
   console.log('PDF loaded');

   // Get the first page of the PDF
   pdf.getPage(1).then(function(page) {
      console.log('Page loaded');

      var scale = 1.5;
      var viewport = page.getViewport({ scale: scale });

      // Create a canvas element to render the page
      var canvas = document.createElement('canvas');
      document.body.appendChild(canvas);
      var context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      // Render the page onto the canvas
      var renderContext = {
        canvasContext: context,
        viewport: viewport
      };
      page.render(renderContext).promise.then(function() {
          console.log('Page rendered');

          // Add event listener to capture text selection
          document.addEventListener('mouseup', function() {
              const selectedText = window.getSelection().toString();
              if (selectedText.length > 0) {
                  console.log('Selected text:', selectedText);
              }
          });
      });
   });
});