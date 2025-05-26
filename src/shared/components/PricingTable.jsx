// 📁 src/shared/components/PricingTable.jsx
export default function PricingTable({ headers = [], plans = [], cta = null, className = "" }) {
  return (
    <div className={`table-container ${className}`}>
      <table className="qrosspass-table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} dangerouslySetInnerHTML={{ __html: header }} />
            ))}
          </tr>
        </thead>
        <tbody>
          {plans.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className={cell === "✖️" ? "cross" : ""}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>


    </div>
  );
}
