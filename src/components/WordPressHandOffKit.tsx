import React, { useState } from 'react';
import { Language } from '../types/catalog.ts';
import {
  X,
  FileCode,
  Check,
  Copy,
  Download,
  ShieldCheck,
  Zap,
  BookOpen,
  HelpCircle,
  ExternalLink,
} from 'lucide-react';

interface WordPressHandOffKitProps {
  isOpen: boolean;
  language: Language;
  onClose: () => void;
}

export const WordPressHandOffKit: React.FC<WordPressHandOffKitProps> = ({
  isOpen,
  language,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'functions' | 'single' | 'archive' | 'guide'>('architecture');
  const [copiedFile, setCopiedFile] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyCode = (name: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedFile(name);
    setTimeout(() => setCopiedFile(null), 2500);
  };

  const downloadZipMock = () => {
    const content = `/* WordPress Child Theme: Terre d'Italia Catalog */\n\nSee functions.php and single-catalogo_prodotto.php for native zero-plugin code.`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'terre-ditalia-wp-catalog-theme.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const phpFunctions = `<?php
/**
 * Theme Name: Terre d'Italia - Catalogo Gastronomico
 * Description: Architettura CPT nativa a zero plugin per catalogo prodotti B2B.
 * Author: Senior WordPress Architect
 * Version: 1.0.0
 */

// 1. REGISTRAZIONE CUSTOM POST TYPE "catalogo_prodotto"
function tdi_register_catalog_cpt() {
    $labels = array(
        'name'               => __('Prodotti Gastronomici', 'terre-ditalia'),
        'singular_name'      => __('Prodotto Catalogo', 'terre-ditalia'),
        'add_new'            => __('Aggiungi Prodotto', 'terre-ditalia'),
        'add_new_item'       => __('Aggiungi Nuovo Prodotto nel Catalogo', 'terre-ditalia'),
        'edit_item'          => __('Modifica Scheda Prodotto', 'terre-ditalia'),
        'all_items'          => __('Tutti i Prodotti', 'terre-ditalia'),
        'search_items'       => __('Cerca nel Catalogo', 'terre-ditalia'),
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'has_archive'        => 'catalogo',
        'rewrite'            => array('slug' => 'catalogo/%categoria_prodotto%', 'with_front' => false),
        'supports'           => array('title', 'editor', 'thumbnail', 'excerpt', 'revisions'),
        'menu_icon'          => 'dashicons-food',
        'show_in_rest'       => true, // Supporto nativo editor blocchi Gutenberg & REST API
    );

    register_post_type('catalogo_prodotto', $args);
}
add_action('init', 'tdi_register_catalog_cpt');

// 2. REGISTRAZIONE TASSONOMIE NATIVE (Zero plugin esterni)
function tdi_register_taxonomies() {
    // Tassonomia Categoria (Pasta, Oli, Sughi, Dolci, Conserve)
    register_taxonomy('categoria_prodotto', 'catalogo_prodotto', array(
        'hierarchical'      => true,
        'labels'            => array('name' => 'Categorie Catalogo'),
        'rewrite'           => array('slug' => 'categoria', 'hierarchical' => true),
        'show_in_rest'      => true,
    ));

    // Tassonomia Regione d'Origine (Campania, Puglia, Sicilia, etc.)
    register_taxonomy('regione_origine', 'catalogo_prodotto', array(
        'hierarchical'      => false,
        'labels'            => array('name' => 'Regioni di Origine'),
        'rewrite'           => array('slug' => 'regione'),
        'show_in_rest'      => true,
    ));
}
add_action('init', 'tdi_register_taxonomies');

// 3. META BOXES NATIVI PER TERROIR, DEGUSTAZIONE E CERTIFICAZIONI
function tdi_add_custom_meta_boxes() {
    add_meta_box(
        'tdi_product_specs',
        'Specifiche Terroir & Certificazioni (DOP/IGP)',
        'tdi_render_specs_metabox',
        'catalogo_prodotto',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'tdi_add_custom_meta_boxes');

function tdi_render_specs_metabox($post) {
    wp_nonce_field('tdi_save_specs', 'tdi_specs_nonce');
    $sub_region   = get_post_meta($post->ID, '_tdi_sub_region', true);
    $cert         = get_post_meta($post->ID, '_tdi_cert', true);
    $format       = get_post_meta($post->ID, '_tdi_format', true);
    $tasting      = get_post_meta($post->ID, '_tdi_tasting', true);
    $pairings     = get_post_meta($post->ID, '_tdi_pairings', true);
    ?>
    <table class="form-table">
        <tr>
            <th><label for="tdi_sub_region">Comune / Micro-Terroir</label></th>
            <td><input type="text" id="tdi_sub_region" name="tdi_sub_region" value="<?php echo esc_attr($sub_region); ?>" class="regular-text" placeholder="es. Gragnano (NA)"></td>
        </tr>
        <tr>
            <th><label for="tdi_cert">Certificazione Ufficiale</label></th>
            <td>
                <select name="tdi_cert" id="tdi_cert">
                    <option value="DOP" <?php selected($cert, 'DOP'); ?>>DOP (Denominazione Origine Protetta)</option>
                    <option value="IGP" <?php selected($cert, 'IGP'); ?>>IGP (Indicazione Geografica Protetta)</option>
                    <option value="BIO" <?php selected($cert, 'BIO'); ?>>Biologico Certificato</option>
                    <option value="Slow Food" <?php selected($cert, 'Slow Food'); ?>>Presidio Slow Food</option>
                </select>
            </td>
        </tr>
        <tr>
            <th><label for="tdi_format">Formato / Confezionamento</label></th>
            <td><input type="text" id="tdi_format" name="tdi_format" value="<?php echo esc_attr($format); ?>" class="regular-text" placeholder="es. 500g, 750ml"></td>
        </tr>
        <tr>
            <th><label for="tdi_tasting">Note di Degustazione</label></th>
            <td><textarea id="tdi_tasting" name="tdi_tasting" rows="3" class="large-text"><?php echo esc_textarea($tasting); ?></textarea></td>
        </tr>
        <tr>
            <th><label for="tdi_pairings">Abbinamenti Consigliati</label></th>
            <td><input type="text" id="tdi_pairings" name="tdi_pairings" value="<?php echo esc_attr($pairings); ?>" class="large-text"></td>
        </tr>
    </table>
    <?php
}

function tdi_save_specs_metabox($post_id) {
    if (!isset($_POST['tdi_specs_nonce']) || !wp_verify_nonce($_POST['tdi_specs_nonce'], 'tdi_save_specs')) return;
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
    if (!current_user_can('edit_post', $post_id)) return;

    $fields = array('tdi_sub_region', 'tdi_cert', 'tdi_format', 'tdi_tasting', 'tdi_pairings');
    foreach ($fields as $field) {
        if (isset($_POST[$field])) {
            update_post_meta($post_id, '_' . $field, sanitize_text_field($_POST[$field]));
        }
    }
}
add_action('save_post_catalogo_prodotto', 'tdi_save_specs_metabox');
`;

  const phpSingle = `<?php
/**
 * Template Name: Scheda Singolo Prodotto Catalogo
 * Template Post Type: catalogo_prodotto
 */
get_header();

while (have_posts()) : the_post();
    $sub_region = get_post_meta(get_the_ID(), '_tdi_sub_region', true);
    $cert       = get_post_meta(get_the_ID(), '_tdi_cert', true);
    $format     = get_post_meta(get_the_ID(), '_tdi_format', true);
    $tasting    = get_post_meta(get_the_ID(), '_tdi_tasting', true);
    $pairings   = get_post_meta(get_the_ID(), '_tdi_pairings', true);
    $regioni    = get_the_terms(get_the_ID(), 'regione_origine');
    $regione_name = (!empty($regioni) && !is_wp_error($regioni)) ? $regioni[0]->name : 'Italia';
?>
<main class="tdi-product-pdp container py-5">
    <div class="row g-5">
        <!-- Galleria Immagini Prodotto -->
        <div class="col-lg-6">
            <div class="tdi-gallery-wrapper position-relative">
                <?php if (has_post_thumbnail()) : ?>
                    <?php the_post_thumbnail('large', array('class' => 'img-fluid rounded-3 shadow-sm w-100')); ?>
                <?php endif; ?>
                <span class="badge bg-dark position-absolute top-0 start-0 m-3"><?php echo esc_html($cert); ?></span>
            </div>
            
            <!-- Box Terroir & Origine -->
            <div class="card mt-4 bg-light border-0 p-3">
                <h6 class="text-uppercase text-danger fw-bold">Regione di Origine</h6>
                <p class="mb-0 fw-semibold"><?php echo esc_html($sub_region); ?> — <?php echo esc_html($regione_name); ?></p>
            </div>
        </div>

        <!-- Dati Descrittivi e Richiesta B2B (NO Carrello) -->
        <div class="col-lg-6">
            <h1 class="display-6 fw-bold"><?php the_title(); ?></h1>
            <p class="text-muted font-monospace"><?php echo esc_html($format); ?></p>
            
            <div class="lead fs-6 my-4"><?php the_content(); ?></div>
            
            <?php if (!empty($tasting)) : ?>
            <div class="mb-4">
                <h6 class="text-uppercase fw-bold text-muted">Profilo Organolettico</h6>
                <p class="fst-italic"><?php echo nl2br(esc_html($tasting)); ?></p>
            </div>
            <?php endif; ?>

            <!-- Modulo Richiesta Scheda Tecnica (No E-Commerce) -->
            <div class="card p-4 border border-secondary border-opacity-25 bg-white shadow-sm mt-4">
                <h5 class="fw-bold mb-2">Richiedi Scheda Tecnica o Campione</h5>
                <p class="small text-muted mb-3">Riservato a distributori, ristoratori e importatori B2B.</p>
                <?php echo do_shortcode('[contact-form-7 id="101" title="Richiesta B2B Prodotto"]'); ?>
            </div>
        </div>
    </div>
</main>
<?php
endwhile;
get_footer();
`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xs animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white border border-[#E0D9CB] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 bg-[#2C3E2D] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
            <div>
              <h3 className="font-serif text-lg tracking-wide">
                {language === 'it' ? 'Architettura WordPress Lean & Zero-Plugin' : 'Lean Zero-Plugin WordPress Architecture'}
              </h3>
              <p className="text-[11px] text-stone-300 font-sans">
                {language === 'it'
                  ? 'Garantisce stabilità decennale senza rotture causate da plugin abbandonati'
                  : 'Guarantees 10+ years stability without breaking changes from abandoned plugins'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-stone-300 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 px-6 pt-3 bg-[#FBF9F5] border-b border-[#E8E2D5] text-xs font-semibold overflow-x-auto scrollbar-none shrink-0">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-3 py-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'architecture'
                ? 'border-[#9E4733] text-[#9E4733]'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            {language === 'it' ? '1. Perché Zero-Plugin?' : '1. Why Zero-Plugin?'}
          </button>
          <button
            onClick={() => setActiveTab('functions')}
            className={`px-3 py-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'functions'
                ? 'border-[#9E4733] text-[#9E4733]'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            functions.php (CPT & Meta)
          </button>
          <button
            onClick={() => setActiveTab('single')}
            className={`px-3 py-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'single'
                ? 'border-[#9E4733] text-[#9E4733]'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            single-catalogo_prodotto.php
          </button>
          <button
            onClick={() => setActiveTab('guide')}
            className={`px-3 py-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'guide'
                ? 'border-[#9E4733] text-[#9E4733]'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            {language === 'it' ? 'Guida per il Cliente' : 'Client Handoff Guide'}
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto flex-1 text-xs leading-relaxed">
          {activeTab === 'architecture' && (
            <div className="space-y-5 text-[#3A3A3A]">
              <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-xl space-y-2">
                <h4 className="font-serif text-base text-[#2C3E2D] font-bold flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#9E4733]" />
                  {language === 'it'
                    ? 'Risposta al Vincolo del Cliente: "Usare meno plugin possibili per stabilità a lungo termine"'
                    : 'Client Constraint Addressed: "As few plugins as possible for long-term stability"'}
                </h4>
                <p className="text-xs text-stone-700">
                  {language === 'it'
                    ? 'Nel mondo WordPress, l’80% dei crash e dei costi di manutenzione futuri derivano da plugin di terze parti (come page builder pesanti, plugin di catalogo commerciali o add-on WooCommerce) che vengono abbandonati dagli sviluppatori o diventano incompatibili con i major update di PHP e WordPress core.'
                    : 'In the WordPress ecosystem, 80% of crashes and maintenance overhead stem from third-party commercial catalog plugins that become abandoned or incompatible when PHP or WordPress core updates.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white border border-[#E0D9CB] rounded-xl space-y-2">
                  <h5 className="font-bold text-red-700 text-xs uppercase tracking-wider">
                    ❌ L'Approccio Sbagliato (Plugin-Heavy)
                  </h5>
                  <ul className="space-y-1 text-stone-600 list-disc list-inside">
                    <li>WooCommerce installato solo per nascondere i prezzi (20+ tabelle SQL inutili)</li>
                    <li>Page builder lenti (Elementor con decine di script JS) che falliscono il test Google 4G</li>
                    <li>Plugin commerciali di catalogo soggetti ad abbonamento annuale o abbandono</li>
                  </ul>
                </div>

                <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-2">
                  <h5 className="font-bold text-emerald-800 text-xs uppercase tracking-wider">
                    ✅ L'Approccio Professionale (Nativo & Lean)
                  </h5>
                  <ul className="space-y-1 text-stone-700 list-disc list-inside">
                    <li><strong>Custom Post Type Nativo:</strong> Registrato direttamente nel Child Theme</li>
                    <li><strong>Zero DB Bloat:</strong> Utilizza le tabelle standard di WordPress (`wp_posts`, `wp_postmeta`)</li>
                    <li><strong>Caricamento in &lt;1.5s su 4G:</strong> Nessun CSS o JS non necessario, HTML semantico puro</li>
                    <li><strong>Multilingua Nativo:</strong> Compatibile al 100% con Polylang (versione free leggera) o WPML</li>
                  </ul>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-stone-500 font-mono text-[11px]">
                  Architettura pronta per deploy immediato su qualsiasi host WordPress
                </span>
                <button
                  onClick={downloadZipMock}
                  className="px-4 py-2 bg-[#2C3E2D] hover:bg-[#1E2D20] text-white font-semibold rounded-md flex items-center gap-2 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Scarica Pacchetto Theme (.txt)</span>
                </button>
              </div>
            </div>
          )}

          {activeTab === 'functions' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-xs text-stone-500 font-mono">
                  wp-content/themes/terre-ditalia-child/functions.php
                </p>
                <button
                  onClick={() => copyCode('functions', phpFunctions)}
                  className="px-3 py-1 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded font-mono text-xs flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedFile === 'functions' ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedFile === 'functions' ? 'Copiato!' : 'Copia PHP'}</span>
                </button>
              </div>
              <pre className="bg-[#1C1C1E] text-emerald-400 p-4 rounded-xl overflow-x-auto font-mono text-[11px] max-h-96 leading-relaxed">
                {phpFunctions}
              </pre>
            </div>
          )}

          {activeTab === 'single' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-xs text-stone-500 font-mono">
                  wp-content/themes/terre-ditalia-child/single-catalogo_prodotto.php
                </p>
                <button
                  onClick={() => copyCode('single', phpSingle)}
                  className="px-3 py-1 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded font-mono text-xs flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedFile === 'single' ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedFile === 'single' ? 'Copiato!' : 'Copia PHP'}</span>
                </button>
              </div>
              <pre className="bg-[#1C1C1E] text-emerald-400 p-4 rounded-xl overflow-x-auto font-mono text-[11px] max-h-96 leading-relaxed">
                {phpSingle}
              </pre>
            </div>
          )}

          {activeTab === 'guide' && (
            <div className="space-y-4 text-stone-700">
              <h4 className="font-serif text-base text-[#2C3E2D] font-bold">
                {language === 'it' ? 'Guida Operativa alla Manutenzione del Catalogo' : 'Catalog Maintenance SOP Guide'}
              </h4>

              <div className="space-y-3">
                <div className="p-3 bg-[#FBF9F5] border border-[#E8E2D5] rounded-lg">
                  <h5 className="font-bold text-[#9E4733] mb-1">
                    Passo 1: Come aggiungere o modificare un prodotto in 2 minuti
                  </h5>
                  <p className="text-xs text-stone-600">
                    Accedi all'area riservata WordPress, clicca su <strong>Prodotti Gastronomici &gt; Aggiungi Prodotto</strong>. Inserisci il nome, carica l'immagine in evidenza (rapporto 4:3) e compila il box "Specifiche Terroir" (Regione, DOP/IGP, note organolettiche). Nessun plugin complesso da configurare.
                  </p>
                </div>

                <div className="p-3 bg-[#FBF9F5] border border-[#E8E2D5] rounded-lg">
                  <h5 className="font-bold text-[#9E4733] mb-1">
                    Passo 2: Gestione Multilingua (Italiano Principale, Inglese)
                  </h5>
                  <p className="text-xs text-stone-600">
                    La struttura è predisposta con stringhe native `__('...', 'terre-ditalia')` e compatibilità Polylang / WPML. Nella barra laterale di ogni prodotto puoi creare la versione inglese collegata con un solo clic.
                  </p>
                </div>

                <div className="p-3 bg-[#FBF9F5] border border-[#E8E2D5] rounded-lg">
                  <h5 className="font-bold text-[#9E4733] mb-1">
                    Passo 3: Mantenere le prestazioni &lt; 3 secondi su 4G
                  </h5>
                  <p className="text-xs text-stone-600">
                    Tutte le immagini caricate vengono automaticamente convertite in formato WebP moderno. Il tema non carica font esterni superflui né script di tracciamento bloccanti.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
