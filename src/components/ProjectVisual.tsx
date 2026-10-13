import { Check } from "lucide-react";

type ProjectVisualProps = {
  type: "payments" | "platform" | "web";
};

export default function ProjectVisual({ type }: ProjectVisualProps) {
  if (type === "payments") {
    return (
      <div className="visual visual-payments">
        <div className="mini-window">
          <div className="window-bar"><i /><i /><i /><span>transaction.flow</span></div>
          <div className="flow-row"><span className="flow-icon">M</span><div><b>Mobile money</b><small>Payment initiated</small></div><Check size={15} /></div>
          <div className="flow-line" />
          <div className="flow-row"><span className="flow-icon lime">↗</span><div><b>Event exchange</b><small>Message routed</small></div><Check size={15} /></div>
          <div className="flow-line" />
          <div className="flow-row"><span className="flow-icon purple">✓</span><div><b>Service provider</b><small>Final status received</small></div><span className="status-dot" /></div>
        </div>
        <div className="visual-tag">99.9% focus on reliability</div>
      </div>
    );
  }
  if (type === "platform") {
    return (
      <div className="visual visual-platform">
        <div className="phone-frame">
          <div className="phone-notch" />
          <div className="phone-greeting">Muraho 👋<small>Your account at a glance</small></div>
          <div className="balance-card"><small>AVAILABLE BALANCE</small><strong>•••••• <span>RWF</span></strong><div className="balance-line" /></div>
          <div className="phone-label">Quick actions</div>
          <div className="quick-actions"><span>↗<small>Save</small></span><span>⇄<small>Transfer</small></span><span>＋<small>More</small></span></div>
          <div className="phone-transaction"><span className="transaction-icon">↙</span><div><b>Monthly savings</b><small>Completed</small></div><strong>+ 25,000</strong></div>
        </div>
        <div className="platform-orbit orbit-one" /><div className="platform-orbit orbit-two" />
      </div>
    );
  }
  return (
    <div className="visual visual-web">
      <div className="browser-card">
        <div className="window-bar"><i /><i /><i /><span>brand.studio</span></div>
        <div className="web-layout">
          <div className="web-copy"><span>BUILT TO MOVE YOU</span><b>Move your<br />business forward.</b><div className="web-cta">Explore more ↗</div></div>
          <div className="web-art"><div className="art-block block-a" /><div className="art-block block-b" /><div className="art-circle" /></div>
        </div>
        <div className="web-footer"><span>DESIGN THAT WORKS</span><span>01 — 04</span></div>
      </div>
      <div className="visual-spark">✳</div>
    </div>
  );
}