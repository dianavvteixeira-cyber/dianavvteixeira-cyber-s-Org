-- Create designers table
CREATE TABLE IF NOT EXISTS designers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create events table
CREATE TABLE IF NOT EXISTS events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  location TEXT NOT NULL,
  event_date DATE NOT NULL,
  status TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create newsletter_subscriptions table
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Seed designers
INSERT INTO designers (name, description, image_url) VALUES
('Aethelgard', 'Sculptural silhouettes and sustainable bio-fabrics that challenge traditional garment construction.', 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6ThIxU4YKl5EgITkrc_yxpau-NM4jzwjCZbwT9UPm918NiImTu_bJdfdbIod1aD4NZb0lCtNznJ3BFH6d6ZJLCGdgH96Uo91ZTDsyMHwk9QS4w27ZMbOPhlJMabpRrxUCVVBHoeTwn4J-Hzv7s1x-XMcjTrFVR-V7-CtSQIIq2njYQiRrlYbRIAHJi4HS5cMFCq0GBHicCEMEWaztCQKlPQIjboEf4h75gRY1vipPsR0IVl9JNLGE9KqYNeJD3sQlSbvDiX_skiZu'),
('Neo-Nomad', 'Post-apocalyptic aesthetics meeting urban luxury through modular design and protective textiles.', 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8i4IXmx2xa73sDwB2JeZH-IXgtqaD9XgdQB7TbvhgfY95QogXP7US_zllKazSYCLA2K7psMAsUknequH4dvzs2LIVKNB_UFUlKtYm2LT02n4GAgkCWnBKLUymUNT8pRldhKfQChju_vq8QPhzIdUxcueBpQrlhoXv1SQhYpULeARV7m-gUDBXU6DFT-h6VABC6XBgDcqp7Q-tvBOj4nknSQ7vP9qkwKBiVqHHJ2Z4YzIK7F-OQzCn8k84LUKIbRmDDBU8jYa4kDuE'),
('Lumina Collective', 'Digital-first garments featuring interactive LED textiles and augmented reality embellishments.', 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7u8TX2KFvhfEKiNi1e8foicZTyBUYm0Jubvuf6e8RIoVx0QMwZChU11ON1TH-1kKZbl0wvl14tXJoe7-io_Oz61NOLMMGFIM590PhHJ6qyH5Vbmn5hApjBLm7UgEc73bv59DhOu3bsHHDCHKVZ64-G89QfxuSKDUXxl1AzPDBMh7G8v-Tp0ZZuuSr077LWHgpW8ScpOxrmuT8bzD70k6NFySEu36bdGYwYc6oZjO30VOlloBAhArxWl1k0JhYdN2-1xm901mS_axq');

-- Seed events
INSERT INTO events (title, location, event_date, status) VALUES
('Paris Fashion Week', 'Grand Palais Éphémère', '2026-02-05', 'Invite Only'),
('Milan Fashion Week', 'Palazzo Reale', '2026-02-18', 'Tickets Available'),
('New York Fashion Week', 'Spring Studios', '2026-03-12', 'Public Access');
