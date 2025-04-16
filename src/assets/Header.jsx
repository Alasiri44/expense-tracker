import React from "react";

// Renders the header section of the Expense Tracker app
function Header() {
    return (
        <>
            <div className="header-component">
                {/* Main title of the app */}
                <h1>Expense Tracker</h1>

                {/* Brief description or tagline */}
                <p>Start taking control of your life and finances.
                    Record, categorize and analyze your spending.
                </p>
            </div>
        </>
    )
}

export default Header;