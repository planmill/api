1- Avoid an excessive DOM size, cause longer style calculations, and produce costly layout reflows.
    Removed shown below block by Planmill developer, Location:- path/api/api/index.html

      $('.page-header pre code, .top-resource-description pre code, code.example').each(function(i, block) {
          hljs.highlightBlock(block);
       });
