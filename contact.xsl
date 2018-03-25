<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
  <html>

    <head>
      <title>Pix | Contact</title>
      <style>
        @import url('https://fonts.googleapis.com/css?family=Montserrat');
        td {
          padding : 20px;
          padding-left: 60px;
          font-family:'Montserrat', sans-serif;
          font-size: 16px;
        }
      </style>
    </head>
  <body>
    <table border="0">
      <xsl:for-each select="contact">

      <tr>
        <td><xsl:value-of select="title"/></td>
      </tr>

      <tr>
        <td>Name:</td>
        <td><xsl:value-of select="name"/></td>
      </tr>

      <tr>
        <td>Location:</td>
        <td><xsl:value-of select="address"/></td>
      </tr>

      <tr>
        <td>Phone:</td>
        <td><xsl:value-of select="phone1"/></td>
      </tr>

      <tr>
        <td></td>
        <td><xsl:value-of select="phone2"/></td>
      </tr>

      <tr>
        <td>Email:</td>
        <td><xsl:value-of select="email"/></td>
      </tr>

      </xsl:for-each>
    </table>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>
