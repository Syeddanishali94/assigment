import React from "react";

function Footer() {
  return (
    <>
      {/* Footer Section */}
      <footer className="mt-12 py-6 bg-muted">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          © {new Date().getFullYear()} My Blog. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
