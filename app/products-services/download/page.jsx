import HeroDownload from "./_section/HeroDownload.jsx";
import Catalogues from "./_section/Catalogues.jsx";
import SpecSheet from "./_section/SpecSheet.jsx";
import Certification from "./_section/Certification.jsx";




export default function DownloadPage() {
  return (
    <div style={{marginTop:"88px"}}>
      <HeroDownload />
        <Catalogues />
        <SpecSheet />
        <Certification/>
      
    </div>
  );
}