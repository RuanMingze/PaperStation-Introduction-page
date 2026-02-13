<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  
  <xsl:template match="/">
    <html>
      <head>
        <title>PaperStation Browser - 站点地图</title>
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background-color: #f5f5f5;
            color: #333;
            line-height: 1.6;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 900px;
            margin: 40px auto;
            padding: 30px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }
          h1 {
            color: #e07020;
            font-size: 2.5em;
            margin-bottom: 30px;
            text-align: center;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
          }
          th, td {
            padding: 12px 15px;
            text-align: left;
            border-bottom: 1px solid #e0e0e0;
          }
          th {
            background-color: #f8f8f8;
            font-weight: 600;
            color: #555;
          }
          tr:hover {
            background-color: #f5f5f5;
          }
          .url {
            font-family: 'Courier New', Courier, monospace;
            font-size: 0.9em;
            color: #0066cc;
            text-decoration: none;
          }
          .url:hover {
            text-decoration: underline;
          }
          .footer {
            margin-top: 40px;
            text-align: center;
            font-size: 0.9em;
            color: #888;
          }
          .logo {
            display: block;
            margin: 0 auto 30px;
            width: 80px;
            height: 80px;
            border-radius: 10px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <img src="/images/logo.png" alt="PaperStation Logo" class="logo"/>
          <h1>PaperStation Browser - 站点地图</h1>
          <table>
            <tr>
              <th>页面 URL</th>
              <th>最后更新</th>
              <th>更新频率</th>
              <th>优先级</th>
            </tr>
            <xsl:for-each select="sitemap:urlset/sitemap:url">
              <tr>
                <td><a href="{sitemap:loc}" class="url"><xsl:value-of select="sitemap:loc"/></a></td>
                <td><xsl:value-of select="sitemap:lastmod"/></td>
                <td><xsl:value-of select="sitemap:changefreq"/></td>
                <td><xsl:value-of select="sitemap:priority"/></td>
              </tr>
            </xsl:for-each>
          </table>
          <div class="footer">
            <p>© 2026 PaperStation Browser. 保留所有权利。</p>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>