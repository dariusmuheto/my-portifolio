export default function Ticker() {
  return (
    <div className="ticker" aria-label="Areas of focus">
      <div className="ticker-track">
        {["PRODUCT ENGINEERING", "MICROSERVICES", "PAYMENT INTEGRATIONS", "FRONTEND DEVELOPMENT", "PRODUCT ENGINEERING", "MICROSERVICES", "PAYMENT INTEGRATIONS", "FRONTEND DEVELOPMENT"].map((item, i) => (
          <span key={`${item}-${i}`}>{item}<b>✳</b></span>
        ))}
      </div>
    </div>
  );
}