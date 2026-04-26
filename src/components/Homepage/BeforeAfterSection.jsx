import { useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const transformations = [
  {
    title: "Before & After Transformation",
    desc:
      "See the difference a thoughtful cut, colour, and finish can make with a real salon result from Harriet Burns Hair.",
    before: "/before.jpeg",
    after: "/after.jpeg"
  },
 
];

export default function BeforeAfterSection() {
  const [posMap, setPosMap] = useState(() =>
    Object.fromEntries(transformations.map((_, i) => [i, 50]))
  );

  const containersRef = useRef({});

  const setContainerRef = (i) => (el) => {
    containersRef.current[i] = el;
  };

  const updateFromClientX = useCallback((i, clientX) => {
    const el = containersRef.current[i];
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    const pct = Math.round((x / rect.width) * 100);
    setPosMap((m) => ({ ...m, [i]: pct }));
  }, []);

  const onMouseDown = (i, e) => {
    e.preventDefault();
    updateFromClientX(i, e.clientX);

    const move = (ev) => updateFromClientX(i, ev.clientX);
    const up = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  };

  const onTouchMove = (i, e) => {
    if (e.touches?.[0]) updateFromClientX(i, e.touches[0].clientX);
  };

  return (
    <section className="mt-20 bg-gradient-to-br from-stone-50 to-teal-50/40 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <p className="mb-2 text-sm text-stone-500">Home / Before & After</p>
            <h2 className="text-4xl font-light text-stone-800">
              Beautiful Hair Transformations
            </h2>
          </div>

          <p className="max-w-lg text-stone-600">
            A quick look at the kind of polished, confidence-boosting results you can
            expect in the chair.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {transformations.map((item, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-2xl border border-stone-100 bg-white/90 shadow-lg transition hover:shadow-xl"
            >
              <div
                ref={setContainerRef(i)}
                onMouseDown={(e) => onMouseDown(i, e)}
                onTouchMove={(e) => onTouchMove(i, e)}
                className="relative m-5 h-[230px] cursor-ew-resize select-none overflow-hidden rounded-xl bg-stone-100"
              >
                <img
                  src={item.after}
                  alt="After hair transformation"
                  className="h-full w-full object-cover  transition-transform duration-300 group-hover:scale-105 active:scale-100"
                  draggable="false"
                />

                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${posMap[i]}%` }}
                >
                  <img
                    src={item.before}
                    alt="Before hair transformation"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 active:scale-100"
                    draggable="false"
                  />
                </div>

                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-stone-700 shadow-sm">
                  Before
                </div>

                <div className="absolute right-4 top-4 rounded-full bg-teal-600/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-sm">
                  After
                </div>

                <div
                  className="absolute top-0 h-full w-[2px] bg-teal-600"
                  style={{ left: `${posMap[i]}%` }}
                >
                  <div
                    className="
                      absolute left-1/2 top-1/2
                      flex h-10 w-10 -translate-x-1/2 -translate-y-1/2
                      cursor-ew-resize items-center justify-center gap-1 rounded-full
                      bg-teal-600 text-white shadow-lg
                    "
                  >
                    <ChevronLeft size={16} />
                    <ChevronRight size={16} />
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6">
                <h3 className="mb-2 text-lg font-semibold text-stone-800">{item.title}</h3>
                <p className="text-sm text-stone-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
