export function Subtitle() {
  return (
    <div className="flex gap-5 flex-wrap justify-center items-center mb-24">
      {templateData.map((item, index) => {
        const isFirst = index === 0;
        return (
          <section
            key={item.name}
            className="flex gap-1.5 items-center"
            style={
              isFirst
                ? {
                    borderRight: "1px solid rgba(255, 255, 255, 0.15)",
                    paddingRight: "20px",
                  }
                : undefined
            }
          >
            <div
              className="w-5 h-5 border-subtitle rounded-sm"
              style={{
                backgroundImage: `var(--${item.themeName}-gradient)`,
                borderColor: `var(--${item.themeName}-border)`,
                boxShadow: `var(--${item.themeName}-shadow-sb)`,
              }}
            />
            <span className="text-white text-sb">{item.name}</span>
          </section>
        );
      })}
    </div>
  );
}

const templateData = [
  { themeName: "exotic", name: "Exótico" },
  { themeName: "mythical", name: "Mítico" },
  { themeName: "legendary", name: "Lendário" },
  { themeName: "epic", name: "Épico" },
  { themeName: "rare", name: "Raro" },
  { themeName: "uncommon", name: "Incomum" },
  { themeName: "common", name: "Comum" },
];
