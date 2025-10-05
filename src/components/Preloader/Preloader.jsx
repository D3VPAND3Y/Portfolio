import { useEffect, useState } from "react"
import "./Preloader.styles.scss"
import { preLoaderAnim } from "../../animations"

const Preloader = () => {
  const [showPreloader, setShowPreloader] = useState(() => {
    return !sessionStorage.getItem('preloaderShown');
  });

  useEffect(() => {
    if (showPreloader) {
      preLoaderAnim();
    }
  }, [showPreloader]);

  if (!showPreloader) {
    return null;
  }

  return (
    <div className="preloader">
        <div className="texts-container">
        <span>Learn.</span>
        <span>Build.</span>
        <span>Craft.</span>
        </div>
    </div>
  )
}

export default Preloader

