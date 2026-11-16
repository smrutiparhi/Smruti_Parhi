import { FiShield, FiCheck, FiLock, FiArrowUpRight, FiShoppingBag, FiHeadphones, FiWatch, FiEdit3, FiLayers, FiZap, FiSun, FiActivity, FiBookOpen, FiFileText, FiTrendingUp, FiDroplet, FiTarget, FiAward, FiClock } from 'react-icons/fi';
import './ProjectIllustration.css';

const concepts = {
  KrishiMitra: { eyebrow: 'INTELLIGENCE THAT TAKES ROOT', headline: 'Better insights.\nStronger harvests.', icon: FiSun, accent: '#34d399', features: ['Crop recommendations', 'Disease detection', 'Market price prediction'], footer: 'Python · Three ML advisory modules', panel: CropPanel },
  'Arcade Learn': { eyebrow: 'CURIOSITY, LEVELLED UP', headline: 'Learn a little.\nUnlock a lot.', icon: FiBookOpen, accent: '#60a5fa', features: ['Interactive learning', 'Gamified modules', 'Responsive experience'], footer: 'React · JavaScript · Interactive learning', panel: LearningPanel },
  'Heart Disease Prediction': { eyebrow: 'TURNING DATA INTO INSIGHT', headline: 'Patterns in data.\nPurpose in prediction.', icon: FiActivity, accent: '#fb7185', features: ['Data cleaning', 'Feature selection', 'Model evaluation'], footer: 'Python · Scikit-learn · Classification', panel: HeartPanel },
  '60-Second News Summarizer': { eyebrow: 'LESS SCROLLING. MORE CONTEXT.', headline: 'The big picture.\nIn a little time.', icon: FiFileText, accent: '#a78bfa', features: ['LLM text processing', 'Long-form to short-form', 'A focused 60-second read'], footer: 'Python · LLM · Natural language processing', panel: NewsPanel },
  RecoverAI: { eyebrow: 'CLARITY WHEN IT MATTERS', headline: 'A clear path.\nA safer recovery.', icon: FiShield, features: ['Guided recovery', 'Safety-first AI', 'Verified decision engine'], footer: '17 inputs · 62 integration tests · 40 scenarios' },
  TaskFlow: { eyebrow: 'LESS FRICTION. MORE FLOW.', headline: 'Big ideas.\nSmall, clear steps.', icon: FiLayers, features: ['Live collaboration', 'Secure workspaces', 'Full task lifecycle'], footer: 'React · WebSockets · SQLite' },
  ShopNest: { eyebrow: 'FROM DISCOVERY TO DELIVERY', headline: 'Good finds.\nGreat experiences.', icon: FiShoppingBag, features: ['Product discovery', 'Seamless cart', 'Order management'], footer: 'Authentication · Cart · Orders · Admin' },
  Blogosphere: { eyebrow: 'A SPACE FOR YOUR NEXT IDEA', headline: 'Write freely.\nPublish beautifully.', icon: FiEdit3, features: ['Live Markdown', 'Reader engagement', 'Automated deployment'], footer: 'Markdown · SQLite · GitHub Actions' },
};

function CropPanel() {
  return <>
    <div className="concept-panel-heading"><span className="concept-icon"><FiSun /></span><div><strong>Field intelligence</strong><small>A smarter growing season</small></div><FiTrendingUp className="concept-muted" /></div>
    <div className="crop-landscape" aria-hidden="true"><div className="crop-sun" /><div className="crop-hill hill-back" /><div className="crop-hill hill-front" /><span className="field-marker"><FiTarget /></span></div>
    <div className="concept-module-grid">{[[FiDroplet, 'Crop fit', 'Soil & climate'], [FiShield, 'Plant health', 'Disease detection'], [FiTrendingUp, 'Market view', 'Price prediction']].map(([Icon, label, detail]) => <div key={label}><Icon /><strong>{label}</strong><small>{detail}</small></div>)}</div>
    <div className="concept-callout"><FiSun /><span>From field conditions to informed decisions.</span></div>
  </>;
}

function LearningPanel() {
  return <>
    <div className="concept-panel-heading"><span className="concept-icon"><FiBookOpen /></span><div><strong>Your next adventure</strong><small>Discover · Practice · Learn</small></div><FiAward className="concept-muted" /></div>
    <div className="learning-quest"><div className="quest-emblem"><FiZap /></div><span>THE CURIOSITY QUEST</span><strong>Small lessons.<br />Big discoveries.</strong><div className="quest-path" aria-hidden="true"><i><FiCheck /></i><b /><i><FiZap /></i><b /><i><FiAward /></i></div></div>
    <div className="lesson-row"><span className="lesson-icon">01</span><div><strong>Explore a concept</strong><small>Build understanding through play</small></div><FiArrowUpRight /></div>
  </>;
}

function HeartPanel() {
  return <>
    <div className="concept-panel-heading"><span className="concept-icon"><FiActivity /></span><div><strong>From features to insight</strong><small>Classification workflow</small></div><span className="concept-muted"><FiLayers /></span></div>
    <div className="heart-signal"><span>DATA → MODEL → EVALUATION</span><svg viewBox="0 0 400 100" aria-hidden="true"><defs><pattern id="signal-grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" stroke="#fb718518" /></pattern></defs><rect width="400" height="100" fill="url(#signal-grid)" /><path d="M0 55H80L95 42L110 62L130 55H155L175 18L190 86L206 43L220 55H265L285 37L300 55H400" fill="none" stroke="#fb7185" strokeWidth="2.5" /></svg><strong>Finding patterns that matter.</strong></div>
    <div className="model-pipeline">{['Clean data', 'Select features', 'Evaluate model'].map((step, index) => <div key={step}><span>0{index + 1}</span><strong>{step}</strong></div>)}</div>
    <div className="concept-callout"><FiActivity /><span>Predictive modeling, from preparation to evaluation.</span></div>
  </>;
}

function NewsPanel() {
  return <>
    <div className="concept-panel-heading"><span className="concept-icon"><FiFileText /></span><div><strong>The essential read</strong><small>More signal. Less noise.</small></div><span className="news-time"><FiClock /> 60 sec</span></div>
    <div className="news-comparison"><div className="news-source"><small>LONG-FORM ARTICLE</small><FiFileText /><div className="article-lines" aria-hidden="true">{Array.from({length: 9}, (_, i) => <i key={i} />)}</div></div><div className="news-digest"><span className="digest-label">THE BRIEF</span><h4>The story,<br />distilled.</h4>{['What happened', 'Why it matters', 'The key takeaway'].map((line, i) => <div className="digest-point" key={line}><span>0{i + 1}</span><strong>{line}</strong></div>)}</div></div>
    <div className="concept-callout"><FiZap /><span>Long-form reporting → LLM processing → A concise read</span></div>
  </>;
}

function RecoveryPanel() {
  return <>
    <div className="concept-panel-heading"><span className="concept-icon"><FiShield /></span><div><strong>Your recovery plan</strong><small>One step at a time</small></div><FiLock className="concept-muted" /></div>
    <div className="recovery-route">
      {['Locate your device', 'Protect your SIM', 'Recover your accounts'].map((step, i) => <div className="recovery-step" key={step}><span>{i === 0 ? <FiCheck /> : `0${i + 1}`}</span><div><strong>{step}</strong><small>{['Start with authorized location tools', 'Block unauthorized access', 'Secure what matters most'][i]}</small></div></div>)}
    </div>
    <div className="concept-callout"><FiShield /><span>Owner-authorized recovery, by design.</span></div>
  </>;
}

function TaskPanel() {
  return <>
    <div className="concept-panel-heading"><span className="concept-icon"><FiLayers /></span><div><strong>Workspace / Launch</strong><small>Every task has a place</small></div><span className="concept-live">● Live</span></div>
    <div className="concept-board">
      {[['To do', 'Plan the next release', 'Review feedback'], ['In progress', 'Build the interface', 'Connect the API'], ['Done', 'Define the vision', 'Set up workspace']].map((column, index) => <div className="concept-column" key={column[0]}><span className="column-title"><i />{column[0]}</span>{column.slice(1).map((task, i) => <div className="concept-task" key={task}><span className="task-category">{i ? 'DEVELOPMENT' : 'PRODUCT'}</span><strong>{task}</strong><div className="task-meta"><span>{index === 2 ? <FiCheck /> : <FiZap />}</span><span className="task-avatar">{i ? 'S' : 'R'}</span></div></div>)}</div>)}
    </div>
  </>;
}

function ShopPanel() {
  return <>
    <div className="concept-panel-heading"><span className="concept-icon"><FiShoppingBag /></span><div><strong>The everyday collection</strong><small>Find your next favorite</small></div><span className="concept-cart">Bag / 02</span></div>
    <div className="concept-products">{[[FiHeadphones, 'Studio headphones', 'SOUND, REFINED'], [FiWatch, 'Everyday watch', 'TIME, REIMAGINED']].map(([Icon, title, caption]) => <div className="concept-product" key={title}><div className="product-object"><Icon /></div><small>{caption}</small><strong>{title}</strong><span className="product-details">Explore collection <FiArrowUpRight /></span></div>)}</div>
    <div className="concept-callout"><FiLock /><span>Discover → Add to bag → Make it yours</span></div>
  </>;
}

function BlogPanel() {
  return <>
    <div className="concept-panel-heading"><span className="concept-icon"><FiEdit3 /></span><div><strong>A thought worth sharing</strong><small>Draft / Creative notebook</small></div><span className="concept-live">● Saved</span></div>
    <div className="concept-editor"><div className="editor-source"><small>MARKDOWN</small><p><em>#</em> Build with curiosity</p><p>Every great project starts<br />with a simple question.</p><p><em>**</em>What if we tried?<em>**</em></p><span className="editor-cursor" /></div><div className="editor-preview"><small>LIVE PREVIEW</small><div className="editor-art"><FiZap /></div><h4>Build with<br />curiosity.</h4><p>Every great project starts with a simple question.</p></div></div>
  </>;
}

export default function ProjectIllustration({ project }) {
  const concept = concepts[project.name];
  if (!concept) return null;
  const Icon = concept.icon;
  const Panel = concept.panel || { RecoverAI: RecoveryPanel, TaskFlow: TaskPanel, ShopNest: ShopPanel, Blogosphere: BlogPanel }[project.name];
  return <div className="project-concept" style={{ '--concept-accent': concept.accent || project.accent || '#8b5cf6' }}>
    <div className="concept-story"><span className="concept-eyebrow">{concept.eyebrow}</span><h4>{concept.headline}</h4><ul>{concept.features.map(feature => <li key={feature}><FiCheck />{feature}</li>)}</ul><div className="concept-signature"><Icon /><span>{concept.footer}</span></div></div>
    <div className="concept-window"><div className="concept-window-bar"><span className="window-dots"><i /><i /><i /></span><span>{project.name.toLowerCase()} / concept</span><FiArrowUpRight /></div><div className="concept-window-body"><Panel /></div></div>
  </div>;
}
