import React from "react";
// import './TradeCard.css';
// import "./TradeCard.css";

export const TradeCard = () => {
  return (
    // <div className="trade-card-container">
    //   <div className="trade-card">
    //     <div className="gradient-background" />
    //     <div className="title">VEDL Looks Weak</div>
    //     <div className="live-status">
    //       <div className="live-indicator" />
    //       Live
    //     </div>
    //     <div className="timestamp">28 Jan 23 | 13:18 | By: Gaurav S.</div>
    //     <div className="entry-row">
    //       <div className="entry">Entry</div>
    //       <div className="trade-name">Trade Name</div>
    //       <div className="current">Current</div>
    //     </div>
    //     <div className="divider" />
    //     <div className="divider" />
    //     <div className="stock-icon" />
    //     <div className="price-row">
    //       <div className="target">
    //         <div className="price-indicator" />
    //         3240
    //       </div>
    //       <div className="target">
    //         <div className="price-indicator" />
    //         3140
    //       </div>
    //       <div className="stock-name">HDFCBANK</div>
    //     </div>
    //     <div className="button-row">
    //       <div className="about-trade-button">About Trade</div>
    //       <div className="place-order-button">Place Order</div>
    //     </div>
    //     <div className="signal-timestamp">
    //       Signal active till 28 August 23 | 11:50
    //     </div>
    //   </div>
    // </div>
    <div
      style={{
        width: "401px",
        height: "306px",
        background: "blue",
        padding: "20px",
        position: "relative",
        borderRadius: 24
      }}
    >
      <div
        style={{ display: "flex", flexDirection: "column", padding: "10px" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              background: "red",
              width: "50px",
              height: "50px",
            }}
          >
            HDFC Bank
          </div>
          <div
            style={{
              marginLeft: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <div>VEDL Looks Weak</div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>28 Jan 23 | 13:18 |</div>
              <div style={{ marginLeft: "10px" }}>By: Gaurav S.</div>
            </div>
          </div>
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
            }}
          >
            Live
          </div>
        </div>
      </div>
      <div
        style={{
          borderBottom: "1px solid black",
          borderTop: "1px solid black",
          marginTop: "10px",
          padding: "10px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ flex: 1 }}>Trade Name</div>
        <div style={{ flex: 1 }}>Entry</div>
        <div style={{ flex: 1 }}>Current</div>
      </div>
      <div
        style={{
          marginTop: "10px",
          padding: "10px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ flex: 1 }}>HDFCBANK</div>
        <div style={{ flex: 1 }}>123</div>
        <div style={{ flex: 1 }}>345</div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            padding: "20px 30px",
            background: "green",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 12,
            // background: "rgba(235, 236, 236, 1)",
          }}
        >
          About Trade{" "}
        </div>
        <div
          style={{
            padding: "20px 30px",
            // background: "green",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: 'linear-gradient(180deg, #01C36D 0%, #01C16C 0.01%, #019C57 100%)',            // background: SVGLinearGradientElement      
          }}
        >
          Place order{" "}
        </div>
      </div>
      <div
        style={{
          // width: "100%",
          textAlign: "center",
          background: "pink",
          position: "absolute",
          width: 401,
          height: 26,
          // flex-shrink: 0,
          bottom: 1,
          left: 0,
          borderRadius: 24,
        }}
      >
        <div>Signal active till 28 August 23 | 11:50</div>
      </div>
    </div>
  );
};
