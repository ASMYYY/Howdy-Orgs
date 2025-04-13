import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';

const interests = [
  "Academic", "Acting", "Advisory", "Advocacy", "Agriculture", "Architecture", "Arts", "Athletic",
  "Business", "Career", "Community", "Consulting", "Cultural", "Development", "Education",
  "Engineering", "Entertainment", "Environmental", "Film", "Food", "Fraternity", "Gaming",
  "Governance", "Health", "Honors", "Interest", "International", "Law", "Leadership", "Marine",
  "Maritime", "Military", "MultiCultural", "Music", "Pantry", "Performance", "Politics",
  "Professional", "Recreation", "Religious", "Research", "Residence", "Science", "Service",
  "Social", "Sorority", "Special", "Spiritual", "Sports", "Support", "Technical", "Traditions",
  "Unity", "Veterinary", "Visualisation"
];

const clubOptions = [
  "The 12th Can", "12th Law Man", "180 Degrees Consulting TAMU", "1st Battalion Staff",
  "1st Brigade", "1st Group Staff", "1st Regiment", "1st Wing", "2nd Group Staff",
  "3rd Battalion Staff", "4th Group Staff", "5th Battalion Staff", "6th Battalion Staff",
  "7th Battalion Staff", "A Battery", "A&M Esports", "A&M Photography Club",
  "A&M Students Promoting Innovation and Research Advancement", "A&M United Methodist Church's College Ministry",
  "A-Company Band", "A-Line Magazine", "Academy of General Dentistry FellowTrack",
  "Adventist Christian Fellowship", "Aerospace Engineering Graduate Student Association",
  "Aesthetic and Cosmetic Dentistry Club", "African Students Association",
  "Agape Family Medicine Clinic", "Aggie Accounting Association", "Aggie ACHIEVEMates",
  "Aggie Actuaries", "Aggie Adaptive Sports", "Aggie Advertising Club",
  "Aggie Aerospace Women in Engineering", "Aggie Ambassadors", "Aggie Angels",
  "Aggie Anglers", "The Aggie Arthouse", "Aggie Artificial Intelligence Society",
  "Aggie Aspiring Educators", "Aggie Athletic Trainers' Association", "Aggie Babes",
  "Aggie Ballet Company", "Aggie Bandsmen", "Aggie Barbeque Club", "Aggie Belles",
  "Aggie Black Male Connection", "Aggie Blacksmithing Club", "Aggie Blades",
  "Aggie Blossoms", "Aggie Business Brothers", "Aggie Business Kings", "Aggie Camping",
  "Aggie Classics", "Aggie Club of Engineers", "Aggie Coding Club",
  "Aggie Competitive Programming Club", "Aggie Cricket Club", "Aggie Data Science Club",
  "Aggie Doc Musicians: Rhythms and Remedies", "Aggie Eagle Post", "Aggie Eco-Representatives",
  "Aggie Emeralds", "Aggie Financial Womens Association", "Aggie Fish Club",
  "Aggie Forensic Investigative Science Organization", "Aggie French Club", "Aggie Gems",
  "Aggie Gentlemen of Integrity", "Aggie Girl Scouts", "Aggie Golden Arrows",
  "Aggie Guide-Dogs and Service-Dogs", "Aggie Habitat for Humanity", "Aggie Icers",
  "Aggie Internship Club", "Aggie Investment Club", "Aggie Keys",
  "Aggie Knitting, Crafting, and More", "Aggie Kolbitar Society", "Aggie Lemon Racing",
  "The Aggie Magic Circle", "Aggie Makers Guild", "Aggie MedReach", "Aggie Men's Alliance",
  "Aggie Men's Club", "Aggie Mental Health Ambassadors", "Aggie Military Family Alliance",
  "Aggie Military, Veterans, and First Responder Healthcare Alliance",
  "Aggie Minority Women in Law", "Aggie Miracle", "Aggie Musical Theater Club",
  "Aggie Muster Committee", "Aggie Nations", "Aggie Newborn and Obstetrics Nurses Association",
  "Aggie Optometry Association", "Aggie Orientation Leaders", "Aggie Originals",
  "Aggie Outdoors", "Aggie Parent & Family Ambassadors", "Aggie Pediatric Nursing Association",
  "Aggie Pregnant and Parenting Student Organization", "Aggie Pullers", "Aggie Quiz Bowl",
  "Aggie Recovery Community", "Aggie Recruitment Committee", "Aggie Replant",
  "Aggie REPS for the Department of Agricultural Economics", "Aggie Robotics",
  "Aggie Roller Hockey", "Aggie Rotaract", "Aggie Royals", "Aggie Salvation Army",
  "Aggie School Volunteers", "Aggie Securities Fund", "Aggie Shields",
  "Aggie Sisters for Christ", "Aggie Sisters in Healthcare", "Aggie Society for Anime and Manga Art",
  "Aggie Southern Darlings", "Aggie Speleological Society", "Aggie Students in Human Resource Development",
  "Aggie Students Supporting Israel", "Aggie Supply Chain Professionals", "Aggie Swamp Club",
  "Aggie Sweethearts", "Aggie Transition Camps (ATC)", "Aggie Vanguard Men's Organization",
  "Aggie West Coast Swing Dance Club", "Aggie Women in Business",
  "Aggie Women in Computer Science at Texas A&M University", "Aggie Women in Construction",
  "Aggie Women in Entomology", "Aggie Wranglers", "Aggie Yacht Club", "AggieCatholic",
  "The Aggieland", "Aggieland Growing through Selfless Service", "Aggieland Mariachi",
  "Aggieland Orchestra/Dukes of Aggieland", "Aggies Against Cancer", "Aggies All Booked",
  "Aggies Create", "Aggies Fighting Human Trafficking", "Aggies for Christ On Campus",
  "Aggies for Limbs", "Aggies for Truth", "Aggies in Foreign Affairs",
  "Aggies in Science, Technology and Engineering Policy", "Aggies Progressing in Excellence",
  "Aggies Promoting Literacy", "Aggies Pursuing Healthcare", "Aggies Reaching Out",
  "Aggies Selflessly Serving In Shaping Tomorrow - ASSIST", "Aggies Serving the Aging Population",
  "Aggies to Medicine", "Aggies with Disabilities", "AggieSat Laboratory", "aggieTEACH",
  "Agricultural Economics Society", "Agricultural Systems Management", "Ags REACH",
  "Akh Mastani", "Album of the Week", "Alexander Hamilton Society"
];

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    Email: '',
    PWD: '',
    Name: '',
    Interest1: '',
    Interest2: '',
    Interest3: '',
    Clubs: []
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Registered:', form);
    navigate('/home');
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fdf6ee', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem' }}>
      <div style={{
        padding: '2rem',
        width: '100%',
        maxWidth: '600px',
        borderRadius: '12px',
        boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
        backgroundColor: 'white',
        border: '1px solid #e0dcdc'
      }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#500000', marginBottom: '2rem' }}>Registration Form</h1>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {['Email', 'Name'].map(field => (
            <div key={field} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <label style={{ minWidth: '100px', fontSize: '0.9rem', color: '#7c6f5f', marginRight: '1rem' }}>{field}</label>
              <input
                type="text"
                name={field}
                value={form[field]}
                onChange={handleChange}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  borderRadius: '6px',
                  border: '1px solid #ccc',
                  backgroundColor: '#eef2fa'
                }}
              />
            </div>
          ))}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <label style={{ minWidth: '100px', fontSize: '0.9rem', color: '#7c6f5f', marginRight: '1rem' }}>Password</label>
            <input
              type="password"
              name="PWD"
              value={form.PWD}
              onChange={handleChange}
              style={{
                flex: 1,
                padding: '0.75rem',
                borderRadius: '6px',
                border: '1px solid #ccc',
                backgroundColor: '#eef2fa'
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <label style={{ minWidth: '100px', fontSize: '0.9rem', color: '#7c6f5f' }}>Interest1</label>
            <select name="Interest1" value={form.Interest1} onChange={handleChange} style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid #ccc', backgroundColor: '#eef2fa' }}>
              <option value="">Select Interest</option>
              {interests.filter(i => i !== form.Interest2 && i !== form.Interest3).map(i => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
            <label style={{ minWidth: '100px', fontSize: '0.9rem', color: '#7c6f5f' }}>Interest2</label>
            <select name="Interest2" value={form.Interest2} onChange={handleChange} style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid #ccc', backgroundColor: '#eef2fa' }}>
              <option value="">Select Interest</option>
              {interests.filter(i => i !== form.Interest1 && i !== form.Interest3).map(i => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
            <label style={{ minWidth: '100px', fontSize: '0.9rem', color: '#7c6f5f' }}>Interest3</label>
            <select name="Interest3" value={form.Interest3} onChange={handleChange} style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid #ccc', backgroundColor: '#eef2fa' }}>
              <option value="">Select Interest</option>
              {interests.filter(i => i !== form.Interest1 && i !== form.Interest2).map(i => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
          </div>
          <label style={{ fontSize: '0.9rem', color: '#7c6f5f' }}>Clubs</label>
          <Select
            isMulti
            name="Clubs"
            options={clubOptions.map(c => ({ value: c, label: c }))}
            value={form.Clubs.map(c => ({ value: c, label: c }))}
            onChange={selected =>
              setForm({
                ...form,
                Clubs: selected.map(s => s.value)
              })
            }
            styles={{
              control: (base) => ({
                ...base,
                padding: '4px',
                borderRadius: '6px',
                borderColor: '#ccc',
                backgroundColor: '#eef2fa'
              }),
              menu: base => ({ ...base, zIndex: 100 }),
              multiValue: base => ({ ...base, backgroundColor: '#ddd' })
            }}
          />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button type="submit" style={{
              backgroundColor: '#500000',
              color: 'white',
              fontWeight: '600',
              padding: '0.75rem 2rem',
              borderRadius: '999px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              marginTop: '1rem'
            }}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
