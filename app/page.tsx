import Image from "next/image";

export default function Home() {
  const menuItems = {
    appetizers: [
      { name: "Zinger Burger", description: "Caramelized onions, gruyère crouton, rich beef broth", price: "$12", image: "https://miro.medium.com/v2/resize:fit:1400/1*Qwxo-poZCz12k2ck5ZE3xg.jpeg" },
      { name: "Escargots de Bourgogne", description: "Six snails baked in garlic-herb butter", price: "$16", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&h=450&fit=crop" },
      { name: "Tartare de Boeuf", description: "Hand-cut beef, capers, cornichons, quail egg", price: "$18", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=450&fit=crop" },
      { name: "Soupe à l'Oignon Gratinée", description: "Classic onion soup topped with melted cheese", price: "$13", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&h=450&fit=crop" },
      { name: "Salade Niçoise", description: "Tuna, olives, green beans, egg, anchovy vinaigrette", price: "$15", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=450&fit=crop" },
      { name: "Pâté de Campagne", description: "Rustic country pâté, cornichons, Dijon mustard", price: "$14", image: "https://images.unsplash.com/photo-1541529086526-db283c563270?w=600&h=450&fit=crop" },
      { name: "Gougères", description: "Warm Gruyère cheese puffs, fresh thyme", price: "$9", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=450&fit=crop" },
      { name: "Moules Marinières", description: "Mussels steamed in white wine, shallots, parsley", price: "$17", image: "https://images.unsplash.com/photo-1559553156-2e971af6de7a?w=600&h=450&fit=crop" },
    ],
    mains: [
      { name: "Coq au Vin", description: "Braised chicken in red wine with lardons and mushrooms", price: "$28", image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&h=450&fit=crop" },
      { name: "Boeuf Bourguignon", description: "Slow-cooked beef in Burgundy wine with root vegetables", price: "$32", image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=600&h=450&fit=crop" },
      { name: "Ratatouille Provençale", description: "Seasonal vegetables, fresh herbs, olive oil", price: "$24", image: "https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?w=600&h=450&fit=crop" },
      { name: "Duck à l'Orange", description: "Roasted duck breast, orange gastrique, wild rice", price: "$34", image: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=600&h=450&fit=crop" },
      { name: "Bouillabaisse", description: "Traditional Provençal fish stew with saffron rouille", price: "$36", image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&h=450&fit=crop" },
      { name: "Steak Frites", description: "Pan-seared ribeye, peppercorn sauce, hand-cut fries", price: "$30", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&h=450&fit=crop" },
      { name: "Cassoulet Toulousain", description: "White beans, duck confit, sausage, pork belly", price: "$33", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&h=450&fit=crop" },
      { name: "Sole Meunière", description: "Pan-fried Dover sole, brown butter, lemon, capers", price: "$38", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&h=450&fit=crop" },
      { name: "Confit de Canard", description: "Duck leg confit, crispy skin, sautéed potatoes", price: "$31", image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=600&h=450&fit=crop" },
      { name: "Gratin Dauphinois", description: "Layered potatoes, cream, garlic, nutmeg, Gruyère", price: "$22", image: "https://images.unsplash.com/photo-1633436375153-d7045cb93e38?w=600&h=450&fit=crop" },
      { name: "Quiche Lorraine", description: "Bacon, Gruyère, and custard in buttery pastry", price: "$19", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=450&fit=crop" },
      { name: "Lamb Navarin", description: "Spring lamb stew, turnips, carrots, new potatoes", price: "$35", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=450&fit=crop" },
    ],
    desserts: [
      { name: "Crème Brûlée", description: "Vanilla bean custard, caramelized sugar crust", price: "$10", image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600&h=450&fit=crop" },
      { name: "Tarte Tatin", description: "Upside-down caramelized apple tart, crème fraîche", price: "$11", image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=600&h=450&fit=crop" },
      { name: "Profiteroles", description: "Choux pastry, vanilla ice cream, chocolate sauce", price: "$10", image: "https://images.unsplash.com/photo-1607920592519-bab2a80efd55?w=600&h=450&fit=crop" },
      { name: "Mousse au Chocolat", description: "Dark chocolate mousse, sea salt, whipped cream", price: "$9", image: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=600&h=450&fit=crop" },
      { name: "Crêpes Suzette", description: "Orange-butter crêpes, flambéed with Grand Marnier", price: "$12", image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=600&h=450&fit=crop" },
      { name: "Île Flottante", description: "Poached meringue, crème anglaise, caramel drizzle", price: "$10", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=450&fit=crop" },
      { name: "Éclair au Café", description: "Choux pastry filled with coffee cream, chocolate glaze", price: "$8", image: "https://images.unsplash.com/photo-1612203985729-70726954388c?w=600&h=450&fit=crop" },
      { name: "Macarons Assortis", description: "Six house-made macarons — pistachio, raspberry, vanilla", price: "$9", image: "https://images.unsplash.com/photo-1558326567-98ae2405596b?w=600&h=450&fit=crop" },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fdfaf5] font-sans text-stone-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-[#fdfaf5]/80 border-b border-stone-200 sm:px-12">
        <h2 className="text-2xl font-serif font-bold tracking-tight text-red-900">
          Frenchy&apos;s
        </h2>
        <div className="hidden gap-8 text-sm font-medium tracking-wide uppercase text-stone-700 sm:flex">
          <a href="#menu" className="hover:text-red-900 transition-colors">Menu</a>
          <a href="#about" className="hover:text-red-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-red-900 transition-colors">Contact</a>
        </div>
        <a
          href="#reserve"
          className="rounded-full bg-red-900 px-5 py-2 text-sm font-medium text-white hover:bg-red-800 transition-colors"
        >
          Reserve
        </a>
      </nav>

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center px-6 py-24 text-center sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-[#fdfaf5] to-[#fdfaf5]" />
        <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl">
          <span className="text-sm tracking-[0.3em] uppercase text-red-800 font-medium">
            Est. 1987 · Authentic French Cuisine
          </span>
          <h1 className="text-5xl font-serif font-bold leading-tight text-stone-900 sm:text-7xl">
            A Taste of <span className="text-red-900 italic">France</span>
            <br /> in Every Bite
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-stone-600">
            From classic coq au vin to decadent crème brûlée, Frenchy&apos;s brings
            the warmth and elegance of a Parisian bistro to your table.
          </p>
          <div className="flex flex-col gap-4 mt-4 sm:flex-row">
            <a
              href="#menu"
              className="rounded-full bg-red-900 px-8 py-3 text-white font-medium hover:bg-red-800 transition-colors shadow-lg shadow-red-900/20"
            >
              Explore Menu
            </a>
            <a
              href="#reserve"
              className="rounded-full border border-stone-300 px-8 py-3 font-medium text-stone-800 hover:bg-stone-100 transition-colors"
            >
              Book a Table
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center gap-4 px-6 py-12">
        <span className="h-px w-16 bg-stone-300" />
        <span className="text-red-900 text-xl">✦</span>
        <span className="h-px w-16 bg-stone-300" />
      </div>

      {/* Menu */}
      <section id="menu" className="px-6 pb-20 sm:px-12 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.3em] uppercase text-red-800 font-medium">
            Our Menu
          </span>
          <h2 className="mt-3 text-4xl font-serif font-bold text-stone-900 sm:text-5xl">
            Crafted with Passion
          </h2>
          <p className="mt-4 text-stone-600 max-w-xl mx-auto">
            Each dish is prepared with the finest seasonal ingredients and time-honored techniques.
          </p>
        </div>

        <div className="space-y-20">
          <MenuCategory title="Appetizers" items={menuItems.appetizers} />
          <MenuCategory title="Main Courses" items={menuItems.mains} />
          <MenuCategory title="Desserts" items={menuItems.desserts} />
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-red-900 text-amber-50 px-6 py-24 sm:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm tracking-[0.3em] uppercase text-amber-200 font-medium">
            Our Story
          </span>
          <h2 className="mt-3 text-4xl font-serif font-bold sm:text-5xl">
            Three Generations of Flavor
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-amber-100/90">
            What began as a small family bistro in Lyon has grown into a beloved
            dining destination. At Frenchy&apos;s, we honor the recipes passed down
            through generations while embracing the freshest local ingredients.
            Every plate tells a story — we invite you to be part of ours.
          </p>
        </div>
      </section>

      {/* Reserve / Contact */}
      <section id="reserve" className="px-6 py-24 sm:px-12 max-w-3xl mx-auto w-full text-center">
        <span className="text-sm tracking-[0.3em] uppercase text-red-800 font-medium">
          Reservations
        </span>
        <h2 className="mt-3 text-4xl font-serif font-bold text-stone-900 sm:text-5xl">
          Join Us for Dinner
        </h2>
        <p className="mt-4 text-stone-600">
          Open Tuesday – Sunday · 5:00 PM – 11:00 PM
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="tel:+15551234567"
            className="rounded-full bg-red-900 px-8 py-3 text-white font-medium hover:bg-red-800 transition-colors shadow-lg shadow-red-900/20"
          >
            Call (555) 123-4567dsf dsadsf
          </a>
          <a
            href="mailto:hello@frenchys.com"
            className="rounded-full border border-stone-300 px-8 py-3 font-medium text-stone-800 hover:bg-stone-100 transition-colors"
          >
            hello@frenchys.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="mt-auto border-t border-stone-200 px-6 py-8 sm:px-12">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-stone-500 sm:flex-row">
          <p className="font-serif text-red-900">Bon Appétit ✦</p>
        </div>
      </footer>
    </div>
  );
}

function MenuCategory({
  title,
  items,
}: {
  title: string;
  items: { name: string; description: string; price: string; image: string }[];
}) {
  return (
    <div>
      <h3 className="mb-8 text-center text-3xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-3">
        {title}
      </h3>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.name}
            className="group overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-5">
              <div className="flex items-baseline justify-between gap-4">
                <h4 className="font-serif font-bold text-lg text-stone-900 group-hover:text-red-900 transition-colors">
                  {item.name}
                </h4>
                <span className="font-serif font-bold text-red-900 whitespace-nowrap">
                  {item.price}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}