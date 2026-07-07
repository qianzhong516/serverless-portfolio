import "../sunrise-scene.css";

function Tree({ className }: { className: string }) {
  return (
    <div className={`sunrise-tree ${className}`}>
      <div className="tshadow" />
      <div className="stem" />
      <div className="left">
        <div className="b" />
        <div className="m" />
        <div className="t" />
      </div>
      <div className="right">
        <div className="b r" />
        <div className="m r" />
        <div className="t r" />
      </div>
      <div className="ls" />
      <div className="rs" />
      <div className="rst" />
    </div>
  );
}

export default function SunriseScene({ title }: { title: string }) {
  return (
    <div className="sunrise-container">
      <div className="sunrise-sky" />
      <div className="sunrise-sun" />
      <div className="sunrise-ground" />

      <Tree className="t1" />
      <Tree className="t2" />
      <Tree className="t3" />

      <div className="sunrise-title">{title}</div>

      <Tree className="t4" />
      <Tree className="t5" />
    </div>
  );
}
