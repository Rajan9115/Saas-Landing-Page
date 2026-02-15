export default function DashboardPreview() {
  return (

      <div className="bg-[#040406]  p-10 rounded-4xl">

        {/* Grid */}
        <div className="
          grid h-120 w-200
          grid-cols-3
          grid-rows-4
          gap-6
        ">

          {/* LEFT TALL CARD */}
          <div className="
            row-span-4
            rounded-2xl
            bg-[#1a1d26]
            
          " />

          {/* TOP MIDDLE (Circle Chart) */}
          <div className="
            row-span-2
            rounded-2xl
            bg-[#1a1d26]
           
          " />

          {/* TOP RIGHT (Users List) */}
          <div className="
            row-span-3
            rounded-2xl
            bg-[#1a1d26]
            
          " />

          {/* BOTTOM MIDDLE (Bar Chart) */}
          <div className="
            row-span-2
            rounded-2xl
            bg-[#1a1d26]
            
          " />

          {/* BOTTOM RIGHT (Small Card) */}
          <div className="
            row-span-1
            rounded-2xl
            bg-[#1a1d26]
             p-2
          " />

        </div>
      </div>
   
  );
}
