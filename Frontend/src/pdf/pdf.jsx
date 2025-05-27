import React from 'react';
import { PDFDownloadLink, Document, Page, Text } from '@react-pdf/renderer';


const MyDocument = () => (
  <Document>
    <Page size="A4">
      <Text>Hello, this is your PDF!</Text>
    </Page>
  </Document>
);

export default function DownloadButton(){
  <div>
    <PDFDownloadLink document={<MyDocument />} fileName="example.pdf">
      {({ loading }) => (loading ? 'Preparing document...' : 'Download PDF')}
    </PDFDownloadLink>
  </div>
}


