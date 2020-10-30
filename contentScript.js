console.log("run script");

chrome.storage.sync.get("action", (data) => {
  chrome.storage.sync.get("content", (data1) => {
    let content;
    content = document.body.innerText;
    
    const lines = content.split("\n");
    console.log("lines", lines.length);
    const linesWithNumber = lines.map(line => {
      const seqMatch = line.match(/seq([0-9]+)/);
      if (!seqMatch) return null;
      // console.log(seqMatch[1]);
      return {
        seq: Number(seqMatch[1]),
        content: line,
      }
    });
    
    
    
    const tempLines = linesWithNumber.filter(l => l !== null).sort((a, b) => a.seq - b.seq).map(l => l.content);
    const newContent = tempLines.join("\n");
    
    document.body.innerText = newContent;

  })
});
