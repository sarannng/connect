import React from "react";
import { Card, Image } from "react-bootstrap";

function MembersCard(){
    return(
        <Card>
        <Card.Header>
            Member Count  343

        </Card.Header>
        <Card.Body>
         
         <div className="row">
            <div className="col-lg-2">
            <Image roundedCircle src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAQQFBgMCB//EADAQAAICAgAFAgYBAwUBAAAAAAECAAMEEQUSITFBUXEGEyIyYYEUkaHBIyRS0fEH/8QAGQEAAgMBAAAAAAAAAAAAAAAAAAQBAgMF/8QAHxEAAwEBAAIDAQEAAAAAAAAAAAECEQMxQRMhIhIE/9oADAMBAAIRAxEAPwDQwjhKknmEcTEKCT0A8wAUJWpxvGawqysqnfK3g/iVXFviO3HyVpoNakDbA6Y79JDpFlLNNCZrA+Lse1xXl1ms/wDMEEfseJo67EurWypw6MNhgehgmmQ00OBjhJIPJEU9RagB3hHDUAPMz3xBn2fyDhVMEXk27eTvxNFPn3EHty8zIO35jdoH0/ErbxF+a1ldkcUu/lD6GFSkggdxrWhucGtoyshaxZbWCObm5ehPnZmwr4JjrUvzlNj66+BueW4fjojoKEHkbG4t8qQ78FNeTDZWH/Efnr5LFJ6v0M0fwfx+igPU7MKi2tsRr3E55XDFC7RQF39SeCPMp68Q4XEFKLyAnaamk2mYdObk+sDRAI7GE8YxY49Zc7YqCfedDNxYUUZigB3hCEAAzFWYxo+I8mqvZVmDAfk9ZtZQ5eIG4quWjf6qtqxfBXeh++0y6vEb/wCeXVaSndK05rGCj1J1Kx8qm6wrRctnXR5ZN4pgrkVHqPtPjz4kHg2LZjY9vzhznsvMdxX+Vmj6b3PRC4lfjUMFsvRCfDNrvI12N/Kt4atDKwa8AMD+z/YSnzcXIsz+drS9ZOgGPaXXDaVwjgBn5f8AdqeZR336/rc0hJfYv0brUbf2gYQjYiIxRxQA7whCABIV9SVWPeDr5mg3oT2H7k3c52otiFXGx0OvbrK3KpGnPo4rURXHOmvEg5FyY1LtZ9ibZj6CWG+upUcSS1Mck22NvuEAA/MSw6aZmbrHsyLFKfLZXI5CdmW/AsN89qmsCmmmwO2z12O0o7KmGWz/ADLG67AY7/v6zZ/DOO1HDQzjTWnm1+PE2idYp1pyW0DCKMiYRQigB33DcUUAHIludQHemuxXuU6ZAft95Scd+IPlE0YbhSe9o9fx/wBzJ2ZT0XLcLGGzvn8hvzLvm3ITcqlvg+i5AJXanR8Srzf57VEV11ONd+bR/pOHDPiKjLrWrLZarh0Db+h/Y+PaTHv+WxHcfcCDEHNQ8Z0lc2tllBwvCtu44EyQnIG5iqnY9dH+k3Ew/FeL2cMzasrHVA99rEqeo5B/7NDwfj+HxNVUMKr/ADWx7+x8xnkvzoj2f7wtoQilzMJ5gYoAdbbEqrZ7GCovcmZbjfHBdvHoLLWeh13b39BInGeIZGRlXrY30UuVRB0A/PvKs9t+SYzHNL7ZlVeiLlEsxI6tIByO6sfeSL2YWdCeplRnMVsJHQ7ksESza1ewjHkPj0nheK5+KoWnMHygPscbH63/AIkWq1+XvPNoBG/WUpJr7JVNeD3dxO/NzEsyLPmMilFPKAAPTpJb2moc6E7GifaVIH1iWVP1gK3YgiQliCnrNHwX4wycTlryib6B35jtlH4P+DN/jZNWVj15GO4eqxeZWHkT4axKPXy+QQf0Zvf/AJll3WY2Tiu26q9Mg9CSdytL2TLNxFAwmZc//9k="/>
            </div>
    
            <div className="col-lg-10">
            <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
             </div>
   
         </div>
         
         
           </Card.Body>
      </Card>
    )
}

export default MembersCard; 