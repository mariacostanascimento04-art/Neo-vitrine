const novosProdutos = [
  // ⌚ ACESSÓRIOS MASCULINOS
  {
    id: "PROD-001",
    nome: "Kit Relógio Geneva + Duo de Pulseiras",
    categoria: "Acessórios Masculinos",
    descricao: "Relógio masculino minimalista com mostrador preto e caixa dourada/prateada. Acompanha 2 pulseiras exclusivas (pedras naturais vulcânicas/olho de tigre e metal em aço inoxidável com couro).",
    estilo: "Executivo / Casual Chic",
    tags: ["relógio", "pulseira", "kit masculino", "geneva"]
  },

  // 💎 JOIAS & BIJUTERIAS DE LUXO
  {
    id: "PROD-002",
    nome: "Broche Vintage Abelha Imperial com Cristais",
    categoria: "Joias & Bijuterias",
    descricao: "Broche requintado em tom ouro envelhecido em formato de abelha, cravado com cristais lapidados e gema verde central. Conectado por correntes duplas a um broche secundário com pérolas e esmeralda.",
    estilo: "Vintage / Luxo",
    tags: ["broche", "abelha", "cristais", "pérolas", "vintage"]
  },
  {
    id: "PROD-003",
    nome: "Conjunto Riviera Corações em Prata",
    categoria: "Joias & Bijuterias",
    descricao: "Conjunto sofisticado de colar e pulseira estilo Riviera, composto por elos em formato de coração cravejados com cristais brilhantes e zircônias de alto brilho.",
    estilo: "Gala / Romântico",
    tags: ["colar", "pulseira", "riviera", "coração", "prata"]
  },

  // 🎀 ACESSÓRIOS DE CABELO & BOLSAS
  {
    id: "PROD-004",
    nome: "Kit Laço Veludo Marsala & Presilha Floral",
    categoria: "Acessórios de Cabelo",
    descricao: "Conjunto romântico composto por laço volumoso de veludo vermelho-bordô com miolo em aplicação de pérolas, acompanhado de presilha delicada com flores e pedraria.",
    estilo: "Romântico / Festas",
    tags: ["laço", "veludo", "presilha", "pérolas", "acessórios cabelo"]
  },
  {
    id: "PROD-005",
    nome: "Bolsa Tiracolo Matelassê Clássica",
    categoria: "Bolsas",
    descricao: "Bolsa estruturada em couro sintético macio com costura matelassê em losangos. Possui alça dupla em corrente dourada trançada e fecho metálico frontal.",
    estilo: "Clássico / Elegante",
    tags: ["bolsa", "matelasse", "corrente dourada", "tiracolo"]
  },

  // 👠 CALÇADOS FEMININOS
  {
    id: "PROD-006",
    nome: "Scarpin Cristal Glamour de Salto Fino",
    categoria: "Calçados Femininos",
    descricao: "Sapato bico fino inteiramente revestido com strass e microcristais iridescentes. Conta com tira ajustável no tornozelo e salto agulha fino.",
    estilo: "Noivas / Gala / Formatura",
    tags: ["scarpin", "salto alto", "cristais", "noiva", "glamour"]
  },
  {
    id: "PROD-007",
    nome: "Sandália Dourada Metálica + Clutch Glitter",
    categoria: "Calçados Femininos",
    descricao: "Sandália minimalista de tiras finas metálicas em tom ouro reluzente com salto alto, acompanhada por uma mini bolsa clutch estruturada em glitter dourado.",
    estilo: "Festa / Eventos",
    tags: ["sandalia dourada", "clutch", "kit festa", "salto alto"]
  },
  {
    id: "PROD-008",
    nome: "Sapato Salto Bloco Rose Gold Glitter",
    categoria: "Calçados Femininos",
    descricao: "Sapato feminino de bico fino com cabedal nude acetinado e salto bloco confortável totalmente revestido em glitter rose gold reluzente. Tira com fivela no tornozelo.",
    estilo: "Festas / Alto Conforto",
    tags: ["salto bloco", "rose gold", "glitter", "bico fino"]
  },

  // 👟 TÊNIS CASUAL & STREETWEAR
  {
    id: "PROD-009",
    nome: "Tênis Monogram Jeans Denim Premium",
    categoria: "Calçados / Tênis",
    descricao: "Tênis casual de luxo confeccionado em tecido jacquard jeans com monogramas, detalhes em couro legítimo marrom, solado tricolor e acabamento premium estilo grife.",
    estilo: "Urban High-Fashion",
    tags: ["tenis jeans", "denim", "luxury sneaker", "streetwear"]
  },
  {
    id: "PROD-010",
    nome: "Tênis Urban 'Look for the Star'",
    categoria: "Calçados / Tênis",
    descricao: "Tênis chunky moderno com sola robusta tridimensional, combinação de tons bege, creme e cinza, cadarços cordão espessos e gravações urbanas texturizadas.",
    estilo: "Chunky / Dad Shoes",
    tags: ["tenis chunky", "urban", "streetwear", "bege"]
  },

  // 👗 MODA FEMININA
  {
    id: "PROD-011",
    nome: "Vestido Midi Preto de Cetim com Fenda",
    categoria: "Roupas Femininas",
    descricao: "Vestido midi em cetim preto com caimento elegante, decote assimétrico, cintura marcada e fenda lateral para uma silhueta sofisticada.",
    estilo: "Gala / Elegante",
    tags: ["vestido", "cetim", "preto", "festa", "midi"]
  },
  {
    id: "PROD-012",
    nome: "Blazer Alfaiataria Off-White Premium",
    categoria: "Roupas Femininas",
    descricao: "Blazer estruturado em tom off-white com lapelas clássicas, modelagem acinturada e botões dourados de acabamento refinado.",
    estilo: "Executivo / Minimalista",
    tags: ["blazer", "alfaiataria", "off-white", "executivo"]
  },
  {
    id: "PROD-013",
    nome: "Conjunto Cropped e Saia Plissada Champagne",
    categoria: "Roupas Femininas",
    descricao: "Conjunto sofisticado em tecido acetinado champagne, composto por cropped de alças finas e saia midi plissada de cintura alta.",
    estilo: "Romântico / Festas",
    tags: ["conjunto", "cropped", "saia plissada", "champagne"]
  },
  {
    id: "PROD-014",
    nome: "Trench Coat Bege com Cinto Estruturado",
    categoria: "Roupas Femininas",
    descricao: "Trench coat clássico em tom bege com ombros estruturados, fechamento transpassado, cinto ajustável e acabamento elegante para dias frios.",
    estilo: "Clássico / Urbano",
    tags: ["trench coat", "casaco", "bege", "clássico"]
  },

  // 🕴️ MODA MASCULINA
  {
    id: "PROD-015",
    nome: "Terno Slim Fit Preto com Lapela de Cetim",
    categoria: "Roupas Masculinas",
    descricao: "Terno masculino de corte slim em tecido preto premium, com paletó de dois botões, lapela de cetim e calça de alfaiataria coordenada.",
    estilo: "Gala / Executivo",
    tags: ["terno", "slim fit", "preto", "alfaiataria", "gala"]
  },
  {
    id: "PROD-016",
    nome: "Camisa Social Azul Marinho de Algodão Egípcio",
    categoria: "Roupas Masculinas",
    descricao: "Camisa social de manga longa confeccionada em algodão egípcio, com gola italiana, corte ajustado e textura sutil em azul marinho.",
    estilo: "Executivo / Casual Chic",
    tags: ["camisa social", "algodão egípcio", "azul marinho", "masculino"]
  },
  {
    id: "PROD-017",
    nome: "Jaqueta de Couro Café com Acabamento Vintage",
    categoria: "Roupas Masculinas",
    descricao: "Jaqueta masculina em couro sintético macio na cor café, com gola curta, zíperes metálicos e acabamento levemente envelhecido.",
    estilo: "Casual / Vintage",
    tags: ["jaqueta", "couro", "café", "vintage", "masculino"]
  },
  {
    id: "PROD-018",
    nome: "Polo Tricotada Off-White com Detalhes Dourados",
    categoria: "Roupas Masculinas",
    descricao: "Polo de tricot macio em tom off-white com gola clássica, textura refinada e discretos detalhes dourados para um visual contemporâneo.",
    estilo: "Casual Chic / Resort",
    tags: ["polo", "tricot", "off-white", "casual chic"]
  }
];

const detalhesProdutos = {
  "PROD-001": { preco: 899.90, imagem: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=85", tamanhos: ["Único"], cores: ["#171717", "#c49a52"] },
  "PROD-002": { preco: 459.90, imagem: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=85", tamanhos: ["Único"], cores: ["#b89552", "#233f32"] },
  "PROD-003": { preco: 699.90, imagem: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=85", tamanhos: ["Único"], cores: ["#d8d8d8"] },
  "PROD-004": { preco: 229.90, imagem: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=900&q=85", tamanhos: ["Único"], cores: ["#711f32", "#171717"] },
  "PROD-005": { preco: 589.90, imagem: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85", tamanhos: ["Único"], cores: ["#171717", "#c49a52"] },
  "PROD-006": { preco: 749.90, imagem: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=85", tamanhos: ["35", "36", "37", "38", "39"], cores: ["#f1f1ee"] },
  "PROD-007": { preco: 649.90, imagem: "https://images.unsplash.com/photo-1534653299134-96a171b61581?auto=format&fit=crop&w=900&q=85", tamanhos: ["35", "36", "37", "38", "39"], cores: ["#c49a52"] },
  "PROD-008": { preco: 529.90, imagem: "https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&w=900&q=85", tamanhos: ["35", "36", "37", "38", "39"], cores: ["#cfa7a0", "#d4af37"] },
  "PROD-009": { preco: 799.90, imagem: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85", tamanhos: ["36", "37", "38", "39", "40"], cores: ["#36516a", "#8b6344"] },
  "PROD-010": { preco: 679.90, imagem: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=85", tamanhos: ["36", "37", "38", "39", "40"], cores: ["#ded5c5", "#8f8f8f"] },
  "PROD-011": { preco: 654.00, imagem: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=85", tamanhos: ["PP", "P", "M", "G"], cores: ["#171717", "#711f32"] },
  "PROD-012": { preco: 340.00, imagem: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=900&q=85", tamanhos: ["PP", "P", "M", "G"], cores: ["#eee9df", "#171717"] },
  "PROD-013": { preco: 989.90, imagem: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=85", tamanhos: ["PP", "P", "M", "G"], cores: ["#d8b58d", "#171717"] },
  "PROD-014": { preco: 400.00, imagem: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&w=900&q=85", tamanhos: ["PP", "P", "M", "G"], cores: ["#c8b79f", "#171717"] },
  "PROD-015": { preco: 500.00, imagem: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=900&q=85", tamanhos: ["46", "48", "50", "52", "54"], cores: ["#171717", "#253044"] },
  "PROD-016": { preco: 449.90, imagem: "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=900&q=85", tamanhos: ["P", "M", "G", "GG"], cores: ["#1d3048", "#f1eee6"] },
  "PROD-017": { preco: 1230.00, imagem: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85", tamanhos: ["P", "M", "G", "GG"], cores: ["#6b4936", "#171717"] },
  "PROD-018": { preco: 529.90, imagem: "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=900&q=85", tamanhos: ["P", "M", "G", "GG"], cores: ["#eee9df", "#1d3048"] }
};

let carrinho = [];
let categoriaAtual = "all";
let avaliacoes = {};

try {
  avaliacoes = JSON.parse(localStorage.getItem("neoVitrineAvaliacoes") || "{}");
} catch (erro) {
  avaliacoes = {};
}

const formatarPreco = valor => valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const escaparHtml = valor => String(valor).replace(/[&<>'"]/g, caractere => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#039;",
  '"': "&quot;"
}[caractere]));

function salvarAvaliacoes() {
  try {
    localStorage.setItem("neoVitrineAvaliacoes", JSON.stringify(avaliacoes));
  } catch (erro) {
    return;
  }
}

const pertenceACategoria = (produto, categoria) => {
  const nomeCategoria = produto.categoria.toLowerCase();
  if (categoria === "feminino") return nomeCategoria.includes("feminina") || nomeCategoria.includes("femininos") || nomeCategoria.includes("bolsa") || nomeCategoria.includes("cabelo") || nomeCategoria.includes("joia") || nomeCategoria.includes("calçados femininos");
  if (categoria === "masculino") return nomeCategoria.includes("masculino");
  if (categoria === "calcados") return nomeCategoria.includes("calçados") || nomeCategoria.includes("tênis");
  if (categoria === "bolsas") return nomeCategoria.includes("bolsa");
  if (categoria === "acessorios") return nomeCategoria.includes("acessório") || nomeCategoria.includes("joia") || nomeCategoria.includes("bolsa");
  if (categoria === "moda") return nomeCategoria.includes("roupas");
  return true;
};

const cartaoProduto = produto => {
  const detalhes = detalhesProdutos[produto.id];
  const avaliacao = avaliacoes[produto.id] || 0;
  const tamanhos = detalhes.tamanhos.map((tamanho, indice) => `<button class="size-btn${indice === 0 ? " active" : ""}" type="button" onclick="selecionarOpcao(this)">${tamanho}</button>`).join("");
  const cores = detalhes.cores.map((cor, indice) => `<button class="color-btn${indice === 0 ? " active" : ""}" type="button" style="background-color: ${cor}" aria-label="Cor ${indice + 1}" onclick="selecionarOpcao(this)"></button>`).join("");
  const estrelas = Array.from({ length: 5 }, (_, indice) => `<button class="star-btn${indice < avaliacao ? " active" : ""}" type="button" aria-label="Avaliar com ${indice + 1} estrela${indice === 0 ? "" : "s"}" aria-pressed="${indice < avaliacao}" onclick="avaliarProduto('${produto.id}', ${indice + 1})"><i class="fas fa-star"></i></button>`).join("");

  return `<article class="product-card" data-category="${escaparHtml(produto.categoria)}">
    <div class="product-img-container">
      <img class="product-img" src="${detalhes.imagem}" alt="${escaparHtml(produto.nome)}" loading="lazy">
    </div>
    <div class="product-info">
      <p class="product-category">${escaparHtml(produto.categoria)}</p>
      <h3 class="product-title">${escaparHtml(produto.nome)}</h3>
      <p class="product-description">${escaparHtml(produto.descricao)}</p>
      <p class="product-style">${escaparHtml(produto.estilo)}</p>
      <p class="product-price">${formatarPreco(detalhes.preco)}</p>
      <div class="product-rating" data-rating="${produto.id}">
        <span class="rating-label">${avaliacao ? `Sua avaliação: ${avaliacao}/5` : "Avalie esta peça"}</span>
        <div class="star-selector">${estrelas}</div>
      </div>
      <div class="options-group">
        <span class="options-label">Tamanho</span>
        <div class="size-selector">${tamanhos}</div>
      </div>
      <div class="options-group">
        <span class="options-label">Cor</span>
        <div class="color-selector">${cores}</div>
      </div>
      <button class="btn-add-cart" type="button" onclick="adicionarAoCarrinho('${produto.id}')">Adicionar à sacola</button>
    </div>
  </article>`;
};

function renderizarProdutos(produtos = novosProdutos) {
  const grade = document.getElementById("product-grid");
  if (grade) grade.innerHTML = produtos.map(cartaoProduto).join("");
}

function filterCategory(categoria, botao) {
  categoriaAtual = categoria;
  const produtosFiltrados = novosProdutos.filter(produto => pertenceACategoria(produto, categoria));
  renderizarProdutos(produtosFiltrados);
  document.querySelectorAll(".filter-btn").forEach(item => item.classList.remove("active"));
  if (botao) botao.classList.add("active");
}

function selecionarOpcao(botao) {
  botao.parentElement.querySelectorAll("button").forEach(item => item.classList.remove("active"));
  botao.classList.add("active");
}

function avaliarProduto(id, nota) {
  avaliacoes[id] = nota;
  salvarAvaliacoes();
  const avaliacao = document.querySelector(`[data-rating="${id}"]`);
  if (!avaliacao) return;
  avaliacao.querySelector(".rating-label").textContent = `Sua avaliação: ${nota}/5`;
  avaliacao.querySelectorAll(".star-btn").forEach((estrela, indice) => {
    const ativa = indice < nota;
    estrela.classList.toggle("active", ativa);
    estrela.setAttribute("aria-pressed", String(ativa));
  });
}

function adicionarAoCarrinho(id) {
  const produto = novosProdutos.find(item => item.id === id);
  const detalhes = detalhesProdutos[id];
  const itemExistente = carrinho.find(item => item.id === id);
  if (itemExistente) itemExistente.quantidade += 1;
  else carrinho.push({ id, nome: produto.nome, imagem: detalhes.imagem, preco: detalhes.preco, quantidade: 1 });
  renderizarCarrinho();
  document.getElementById("cart-drawer").classList.add("open");
  document.getElementById("cart-overlay").classList.add("open");
}

function removerDoCarrinho(id) {
  carrinho = carrinho.filter(item => item.id !== id);
  renderizarCarrinho();
}

function renderizarCarrinho() {
  const itens = document.getElementById("cart-items");
  const total = carrinho.reduce((soma, item) => soma + item.preco * item.quantidade, 0);
  document.getElementById("cart-count").textContent = carrinho.reduce((soma, item) => soma + item.quantidade, 0);
  document.getElementById("cart-total-price").textContent = formatarPreco(total);
  itens.innerHTML = carrinho.length ? carrinho.map(item => `<div class="cart-item">
    <img src="${item.imagem}" alt="${escaparHtml(item.nome)}">
    <div class="cart-item-details">
      <p class="cart-item-title">${escaparHtml(item.nome)}</p>
      <p class="cart-item-sub">Quantidade: ${item.quantidade}</p>
      <p class="cart-item-price">${formatarPreco(item.preco * item.quantidade)}</p>
      <button class="remove-item" type="button" onclick="removerDoCarrinho('${item.id}')">Remover</button>
    </div>
  </div>`).join("") : "<p class=\"cart-item-sub\">Sua sacola está vazia.</p>";
}

function fecharCarrinho() {
  document.getElementById("cart-drawer").classList.remove("open");
  document.getElementById("cart-overlay").classList.remove("open");
}

function fecharConfirmacao() {
  const modal = document.getElementById("checkout-modal");
  const pixPayment = document.getElementById("pix-payment");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  pixPayment.classList.remove("open");
  pixPayment.setAttribute("aria-hidden", "true");
}

function checkout() {
  if (!carrinho.length) return alert("Sua sacola está vazia.");
  const formaPagamento = document.getElementById("payment-method").value;
  const total = carrinho.reduce((soma, item) => soma + item.preco * item.quantidade, 0);
  fecharCarrinho();
  document.getElementById("checkout-payment").textContent = `Forma de pagamento escolhida: ${formaPagamento}`;
  if (formaPagamento === "Pix") {
    const dadosPix = `Neo Vitrine | Pedido demonstrativo | Total ${formatarPreco(total)}`;
    const qrCode = document.getElementById("pix-qr");
    const pixPayment = document.getElementById("pix-payment");
    qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(dadosPix)}`;
    pixPayment.classList.add("open");
    pixPayment.setAttribute("aria-hidden", "false");
  }
  document.getElementById("checkout-modal").classList.add("open");
  document.getElementById("checkout-modal").setAttribute("aria-hidden", "false");
}

document.addEventListener("DOMContentLoaded", () => {
  renderizarProdutos();
  renderizarCarrinho();
  document.getElementById("cart-btn").addEventListener("click", () => {
    document.getElementById("cart-drawer").classList.add("open");
    document.getElementById("cart-overlay").classList.add("open");
  });
  document.getElementById("close-cart").addEventListener("click", fecharCarrinho);
  document.getElementById("cart-overlay").addEventListener("click", fecharCarrinho);
  document.getElementById("search-btn").addEventListener("click", () => {
    const termo = prompt("O que você procura na Neo Vitrine?");
    if (!termo) return;
    const busca = termo.toLowerCase();
    renderizarProdutos(novosProdutos.filter(produto => `${produto.nome} ${produto.categoria} ${produto.tags.join(" ")}`.toLowerCase().includes(busca)));
  });
});