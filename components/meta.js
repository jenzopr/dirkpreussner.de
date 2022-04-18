import Head from 'next/head'

const Meta = ({title, keywords, description, ogTitle, ogType, ogUrl, ogImage}) => {
    return ( 
       <Head>
           <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
           <meta name="keywords" content={keywords}></meta>
           <meta name="description" content={description}></meta>
           <meta property="og:title" content={ogTitle} />
           <meta property='og:description' content={description}></meta>
           <meta property="og:type" content={ogType}/>
           <meta property="og:url" content={ogUrl} />
           <meta property="og:image" content={ogImage} />
           <meta charSet="utf-8"></meta>
           <link rel="icon" href="/favicon.ico"></link>
           <title>{title}</title>
       </Head>
     );
}
 Meta.defaultProps = {
     title: "Dirk Preußner - Beratung & Entwicklung",
     keywords: "coaching, coaching frankfurt, coaching führungskräfte, veränderung, stress, workshop, neuorientierung, beratung, systemische beratung, beratungsgespräch, beratungsstelle",
     description: "Coaching, Beratung und Workshops für Führungskräfte, Unternehmen und Einzelpersonen",
     ogTitle: "Dirk Preußner - Beratung & Entwicklung",
     ogUrl: 'https://www.dirkpreussner.de',
     ogType: 'website',
     ogImage: 'https://www.dirkpreussner.de/lemrich-start-016.jpg'
 }
export default Meta;