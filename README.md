<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UnderGlow</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>UnderGlow</h1>
    <form id="searchForm">
        <input type="text" id="searchInput" placeholder="Search or enter URL">
        <button type="submit">Go</button>
    </form>
    <iframe id="iframe" src="about:blank"></iframe>

    <script>
        document.getElementById('searchForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const input = document.getElementById('searchInput').value.trim();
            const isUrl = input.includes('.') && 
                         (/^(https?:\/\/)/.test(input) || 
                          /^([a-z0-9]([a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}(\/.*)?$/i.test(input));
            let url = input;
            if (isUrl && !input.startsWith('http')) {
                url = 'https://' + input;
            }
            if (!isUrl) {
                url = `https://searx.bndkt.io/search?q=${input}`; // searx on top frfr
            }
            const proxyUrl = `/api/flow.js?q=${encodeURIComponent(url)}`; //proxy da ho
            document.getElementById('iframe').src = proxyUrl;
        });
    </script>
</body>
</html>
