// clients array
const clients = [
  {
    company: "ABR",
    contact: "Ernesto Duarte and Ana Maria",
    revenue2025: 139000,
    professionalBrandsPercent: "70% Makita / 25% EIBENSTOCK / 5% Milwaukee",
    segment: "Construction",
    district: "Santarém",
    locationInfo: "Torres Novas, central Portugal",
    infoProfile: "Works with Makita for 30 years; family-owned importer of various brands (including own brand); SAT."
  },
  {
    company: "Airoferragens",
    contact: "Inês Dias and Maria Dias",
    revenue2025: 254000,
    professionalBrandsPercent: "20% Makita / 50% DeWalt / 30% Bosch",
    segment: "Internet & Retail",
    district: "Lisbon",
    locationInfo: "Lisbon, Portugal",
    infoProfile: "Family business dedicated to internet sales and traditional store; works with Makita for 6 years; 1 store + 1 online platform; notable growth."
  },
  {
    company: "Aquamatic",
    contact: "José Jordão and Felipe Melo",
    revenue2025: 65000,
    professionalBrandsPercent: "30% Makita / 40% Milwaukee / 30% Husqvarna",
    segment: "Garden",
    district: "Lisbon",
    locationInfo: "Lisbon, Portugal",
    infoProfile: "6 stores distributed north to south of Portugal; main Iberian channel for Milwaukee & Husqvarna battery OPE; works with Makita for 5 years."
  },
  {
    company: "Armando Freitas",
    contact: "Diogo Nogueira",
    revenue2025: 31000,
    professionalBrandsPercent: "90% Makita / 5% Milwaukee / 5% Others",
    segment: "Construction",
    district: "Porto",
    locationInfo: "Lixa (northern interior), Portugal",
    infoProfile: "Works with Makita for 10 years; family-owned traditional market business; 1 store."
  },
  {
    company: "Atila",
    contact: "Amadeu Trigueira",
    revenue2025: 100000,
    professionalBrandsPercent: "35% Makita / 45% Milwaukee / 20% Festool",
    segment: "General",
    district: "Porto",
    locationInfo: "Penafiel (north coast), Portugal",
    infoProfile: "Works with Makita for 12 years; family-owned traditional generalist business; 1 store."
  },
  {
    company: "Benemáquina",
    contact: "Sérgio Fialho",
    revenue2025: 112000,
    professionalBrandsPercent: "70% Makita / 20% Nilfisk / 10% Milwaukee",
    segment: "General & Cleaning",
    district: "Leiria",
    locationInfo: "Benedita region, Portugal",
    infoProfile: "Works with Makita for 30 years; family-owned traditional market business and SAT; 1 store."
  },
  {
    company: "Bricofel",
    contact: "Isidoro Raposo",
    revenue2025: 45000,
    professionalBrandsPercent: "20% Makita / 40% DeWalt / 20% Festool / 10% Fein",
    segment: "Metal",
    district: "Bragança",
    locationInfo: "Bragança (northern interior of Portugal), Portugal",
    infoProfile: "Works with Makita for 25 years; family-owned traditional generalist & industrial metal business; 1 store."
  },
  {
    company: "Bobinadora Pombalense",
    contact: "Gracinda Pedro and Rosa Pedro",
    revenue2025: 112000,
    professionalBrandsPercent: "90% Makita / 10% Others",
    segment: "General",
    district: "Leiria",
    locationInfo: "Pombal region, central Portugal",
    infoProfile: "Works with Makita for 30 years; family-owned traditional market business; 1 store."
  },
  {
    company: "Cansiltra",
    contact: "Gonçalo Trailhão and Luis Trailhão",
    revenue2025: 70000,
    professionalBrandsPercent: "45% Makita / 50% DeWalt / 5% Husqvarna",
    segment: "General",
    district: "Aveiro",
    locationInfo: "Aveiro (central coast), Portugal",
    infoProfile: "Works with Makita for 3 years; family-owned traditional market business; 2 stores."
  },
  {
    company: "Electroxi",
    contact: "Ana Sanches",
    revenue2025: 66000,
    professionalBrandsPercent: "45% Makita / 50% Stihl / 5% Hikoki",
    segment: "General",
    district: "Azores",
    locationInfo: "Azores Islands, Portugal",
    infoProfile: "Works with Makita for 15 years; family-owned traditional market business; 2 stores."
  },
  {
    company: "Ferrai",
    contact: "Américo Vaz",
    revenue2025: 293000,
    professionalBrandsPercent: "40% Makita / 55% Bosch / 5% Fein",
    segment: "General",
    district: "Porto",
    locationInfo: "Porto, Portugal",
    infoProfile: "Works with Makita for 15 years; family-owned business; strong sales team; 1 store + 1 online platform."
  },
  {
    company: "Francisco Lourenço",
    contact: "Francisco Lourenço and Tiago Lourenço",
    revenue2025: 44600,
    professionalBrandsPercent: "70% Makita / 10% Bosch / 15% DeWalt / 5% Husqvarna",
    segment: "General",
    district: "Viana do Castelo",
    locationInfo: "Monção, Portugal",
    infoProfile: "Has been working with Makita for six years; a family-owned generalist and garden retailer — one store."
  },
  {
    company: "Goncalves & Moreira",
    contact: "Diogo Costa and Ricardo Silva",
    revenue2025: 281000,
    professionalBrandsPercent: "30% Makita / 50% Milwaukee / 20% DeWalt",
    segment: "Construction & Metal",
    district: "Porto",
    locationInfo: "Trofa (North Coast), Portugal",
    infoProfile: "Works with Makita for 10 years; family-owned traditional market & online; large sales team; 1 store + 1 online platform."
  },
  {
    company: "Isauro Neves",
    contact: "João Filipe",
    revenue2025: 90000,
    professionalBrandsPercent: "30% Makita / 60% Bosch / 5% Husqvarna / 5% Fein",
    segment: "Industry & Construction",
    district: "Aveiro",
    locationInfo: "Aveiro (central coast), Portugal",
    infoProfile: "Works with Makita for 15 years; family-owned traditional market business – industrial market; 1 store."
  },
  {
    company: "JMM",
    contact: "Roque Costa",
    revenue2025: 107000,
    professionalBrandsPercent: "40% Makita / 40% Metabo / 20% Fein",
    segment: "Industry",
    district: "Braga",
    locationInfo: "Guimarães (northern interior), Portugal",
    infoProfile: "Works with Makita for 17 years; large company in electrical & industrial maintenance; SAT; 1 store."
  },
  {
    company: "Josilmar",
    contact: "David Marques",
    revenue2025: 91000,
    professionalBrandsPercent: "60% Makita / 30% Bosch / 10% DeWalt",
    segment: "Construction",
    district: "Lisbon",
    locationInfo: "Lisbon, Portugal",
    infoProfile: "Works with Makita for 15 years; family-owned traditional market business; 1 store."
  },
  {
    company: "Machado & Cardoso",
    contact: "Rufino Cardoso",
    revenue2025: 67000,
    professionalBrandsPercent: "100% Makita",
    segment: "General",
    district: "Braga",
    locationInfo: "Braga (northern interior), Portugal",
    infoProfile: "Works with Makita for 30 years; family-owned traditional generalist business; SAT."
  },
  {
    company: "Maquitop",
    contact: "Sérgio Ferreira and José Gomes",
    revenue2025: 130000,
    professionalBrandsPercent: "85% Makita / 10% Festool / 5% Fein",
    segment: "General & Garden",
    district: "Viana do Castelo",
    locationInfo: "Viana do Castelo (north coast), Portugal",
    infoProfile: "Works with Makita for 15 years; family-owned traditional generalist & garden business; 1 store."
  },
  {
    company: "Maquitudo",
    contact: "Pedro Lopes",
    revenue2025: 81000,
    professionalBrandsPercent: "50% Makita / 30% Milwaukee / 20% Husqvarna",
    segment: "General",
    district: "Aveiro",
    locationInfo: "Figueira da Foz (central coast), Portugal",
    infoProfile: "Works with Makita for 15 years; family-owned traditional generalist & industry business; 2 stores."
  },
  {
    company: "Maquivedras",
    contact: "Rodrigo Casaleiro and Margarida Casaleiro",
    revenue2025: 149000,
    professionalBrandsPercent: "80% Makita / 10% Milwaukee / 10% Others",
    segment: "Construction",
    district: "Lisbon",
    locationInfo: "Lisbon, Portugal",
    infoProfile: "Works with Makita for 25 years; family-owned traditional market business; 1 store + 1 online platform."
  },
  {
    company: "Martins & Martins",
    contact: "Filipe Silva and Bruno Silva",
    revenue2025: 361000,
    professionalBrandsPercent: "90% Makita / 10% Others",
    segment: "Construction",
    district: "Braga",
    locationInfo: "Braga (northern region), Portugal",
    infoProfile: "Works with Makita for 15 years; family-owned traditional market generalist & construction; 1 store."
  },
  {
    company: "Oleirep",
    contact: "Emanuel Matias",
    revenue2025: 67000,
    professionalBrandsPercent: "90% Makita / 10% Others",
    segment: "General & Garden",
    district: "Castelo Branco",
    locationInfo: "Oleiros (central interior zone), Portugal",
    infoProfile: "Works with Makita for 15 years; family-owned generalist and garden business; 3 stores + 1 online platform."
  },
  {
    company: "Proveda",
    contact: "Bruno Tourita",
    revenue2025: 77000,
    professionalBrandsPercent: "80% Makita / 10% Milwaukee / 10% Husqvarna",
    segment: "Construction & Wood",
    district: "Lisbon",
    locationInfo: "Lisbon, Portugal",
    infoProfile: "Works with Makita for 20 years; family-owned traditional market business; also sells industrial maintenance products and rents machines."
  },
  {
    company: "Somaterial",
    contact: "João Paulo",
    revenue2025: 46000,
    professionalBrandsPercent: "90% Makita / 10% Others",
    segment: "Metal",
    district: "Madeira",
    locationInfo: "Madeira Island, Portugal",
    infoProfile: "Works with Makita for 22 years; family-owned metal market business; SAT; 1 store."
  },
  {
    company: "Supermaco",
    contact: "João Ferreira",
    revenue2025: 58000,
    professionalBrandsPercent: "70% Makita / 20% Bosch / 10% Husqvarna",
    segment: "General & Rescue",
    district: "Viseu",
    locationInfo: "Tábua (central interior), Portugal",
    infoProfile: "Works with Makita for 7 years; family-owned generalist & rescue-equipment retail business; 1 store."
  },
  {
    company: "Thomaz Dos Santos",
    contact: "Felipe Contente",
    revenue2025: 42000,
    professionalBrandsPercent: "70% Makita / 30% Others",
    segment: "Construction",
    district: "Leiria",
    locationInfo: "Leiria, Portugal",
    infoProfile: "Company over 100 years dedicated to metal sector; works with Makita for 7 years; 1 store."
  },
  {
    company: "VHS",
    contact: "Vitor Silva and Carlos Casais",
    revenue2025: 447000,
    professionalBrandsPercent: "90% Makita / 10% Others",
    segment: "General",
    district: "Porto",
    locationInfo: "Porto, Portugal",
    infoProfile: "Works with Makita for 20 years; family-owned traditional generalist market business; SAT; 1 store."
  }
];

// format revenue as currency
function formatRevenue(val) {
  return "€ " + val.toLocaleString();
}

// render clients in UI, update filter and toggle details open/close
function renderClients(list) {
  const container = document.getElementById("clientsList");
  container.innerHTML = "";

  list.forEach(c => {
    const div = document.createElement("div");
    div.classList.add("client");

    const locKey = (c.district + " " + c.locationInfo).toLowerCase();
    div.dataset.location = locKey;

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    titleDiv.textContent = `${c.company} — ${c.segment}`;
    div.appendChild(titleDiv);

    const detailsDiv = document.createElement("div");
    detailsDiv.classList.add("details");
    detailsDiv.innerHTML = `
      <p><strong>Contact:</strong> ${c.contact || "-"}</p>
      <p><strong>Revenue 2025:</strong> ${formatRevenue(c.revenue2025)}</p>
      <p><strong>Professional Brands %:</strong> ${c.professionalBrandsPercent}</p>
      <p><strong>District:</strong> ${c.district}</p>
      <p><strong>Location Info:</strong> ${c.locationInfo}</p>
      <p><strong>Info Profile:</strong> ${c.infoProfile}</p>
    `;
    div.appendChild(detailsDiv);

    div.addEventListener("click", () => {
      // close others
      document.querySelectorAll(".client.open").forEach(el => {
        if (el !== div) {
          el.classList.remove("open");
        }
      });
      // toggle this one
      div.classList.toggle("open");
    });

    container.appendChild(div);
  });
}

// filter by location (district or locationInfo)
document.getElementById("filterLocation").addEventListener("input", e => {
  const filter = e.target.value.trim().toLowerCase();
  const filtered = clients.filter(c => {
    const locKey = (c.district + " " + c.locationInfo).toLowerCase();
    return locKey.includes(filter);
  });
  renderClients(filtered);
});

// initial render
renderClients(clients);
