import { useState } from "react";
import styles from "./UserForm.module.css";

function UserForm() {
  // Required fields (your homework fields)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  // Winx magical add-ons (still useState per value)
  const [winxCharacter, setWinxCharacter] = useState("");
  const [magicPower, setMagicPower] = useState("");
  const [transformation, setTransformation] = useState("");
  const [fairyLevel, setFairyLevel] = useState("1");

  return (
    <section className={styles.wrap}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>Winx Fairy Profile</h2>
          <p className={styles.subtitle}>
            Create your magical identity and see your data instantly.
          </p>
        </div>
        <div className={styles.badge}>✨ Enchantix Mode</div>
      </div>

      <div className={styles.grid}>
        {/* LEFT: FORM */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Your Details</h3>

          <div className={styles.field}>
            <label className={styles.label}>Name</label>
            <input
              className={styles.input}
              type="text"
              value={name}
              placeholder="e.g., Kymbat"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Email</label>
            <input
              className={styles.input}
              type="email"
              value={email}
              placeholder="e.g., fairy@alfia.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Date of Birth</label>
            <input
              className={styles.input}
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Gender</label>
            <div className={styles.inline}>
              <label className={styles.radio}>
                <input
                  type="radio"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Male
              </label>

              <label className={styles.radio}>
                <input
                  type="radio"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Female
              </label>
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Country</label>
            <select
              className={styles.select}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Select country</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="USA">USA</option>
              <option value="Germany">Germany</option>
              <option value="Japan">Japan</option>
            </select>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>City</label>
            <input
              className={styles.input}
              type="text"
              value={city}
              placeholder="e.g., Almaty"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className={styles.divider} />

          <h3 className={styles.cardTitle}>Winx Magic</h3>

          <div className={styles.field}>
            <label className={styles.label}>Who are you in Winx?</label>
            <select
              className={styles.select}
              value={winxCharacter}
              onChange={(e) => setWinxCharacter(e.target.value)}
            >
              <option value="">Choose your Winx vibe</option>
              <option value="Bloom">Bloom</option>
              <option value="Stella">Stella</option>
              <option value="Flora">Flora</option>
              <option value="Musa">Musa</option>
              <option value="Tecna">Tecna</option>
              <option value="Aisha (Layla)">Aisha (Layla)</option>
            </select>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Your magic power</label>
            <input
              className={styles.input}
              type="text"
              value={magicPower}
              placeholder="e.g., Fire Dragon Flame / Nature / Music / Tech"
              onChange={(e) => setMagicPower(e.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Transformation</label>
            <select
              className={styles.select}
              value={transformation}
              onChange={(e) => setTransformation(e.target.value)}
            >
              <option value="">Select transformation</option>
              <option value="Magic Winx">Magic Winx</option>
              <option value="Charmix">Charmix</option>
              <option value="Enchantix">Enchantix</option>
              <option value="Believix">Believix</option>
              <option value="Harmonix">Harmonix</option>
              <option value="Sirenix">Sirenix</option>
            </select>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Fairy Level: {fairyLevel}</label>
            <input
              className={styles.range}
              type="range"
              min="1"
              max="10"
              value={fairyLevel}
              onChange={(e) => setFairyLevel(e.target.value)}
            />
          </div>
        </div>

        {/* RIGHT: OUTPUT */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Your Magical Profile</h3>

          <div className={styles.output}>
            <div className={styles.row}>
              <span className={styles.key}>Name</span>
              <span className={styles.val}>{name || "—"}</span>
            </div>
            <div className={styles.row}>
              <span className={styles.key}>Email</span>
              <span className={styles.val}>{email || "—"}</span>
            </div>
            <div className={styles.row}>
              <span className={styles.key}>Date of Birth</span>
              <span className={styles.val}>{birthDate || "—"}</span>
            </div>
            <div className={styles.row}>
              <span className={styles.key}>Gender</span>
              <span className={styles.val}>{gender || "—"}</span>
            </div>
            <div className={styles.row}>
              <span className={styles.key}>Country</span>
              <span className={styles.val}>{country || "—"}</span>
            </div>
            <div className={styles.row}>
              <span className={styles.key}>City</span>
              <span className={styles.val}>{city || "—"}</span>
            </div>

            <div className={styles.divider} />

            <div className={styles.row}>
              <span className={styles.key}>Winx Character</span>
              <span className={styles.val}>{winxCharacter || "—"}</span>
            </div>
            <div className={styles.row}>
              <span className={styles.key}>Magic Power</span>
              <span className={styles.val}>{magicPower || "—"}</span>
            </div>
            <div className={styles.row}>
              <span className={styles.key}>Transformation</span>
              <span className={styles.val}>{transformation || "—"}</span>
            </div>
            <div className={styles.row}>
              <span className={styles.key}>Fairy Level</span>
              <span className={styles.val}>✨ {fairyLevel}/10</span>
            </div>
          </div>

          <p className={styles.note}>
            Tip: This is a controlled form — each field updates state and renders instantly.
          </p>
        </div>
      </div>
    </section>
  );
}

export default UserForm;
