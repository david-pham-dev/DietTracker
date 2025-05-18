-- Create motivational messages table
CREATE TABLE IF NOT EXISTS motivational_messages (
  id SERIAL PRIMARY KEY,
  message TEXT NOT NULL,
  type VARCHAR(10) NOT NULL CHECK (type IN ('success', 'failure')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert some initial motivational messages
INSERT INTO motivational_messages (message, type) VALUES
('Amazing job! Keep up the great work on your health journey!', 'success'),
('Consistency is key! You''re building healthy habits that will last a lifetime.', 'success'),
('You''re crushing it! Another day of making your health a priority.', 'success'),
('Fantastic work today! Your future self thanks you for these healthy choices.', 'success'),
('Success is built one day at a time. Today you added another brick!', 'success'),
('Don''t worry about today. Tomorrow is a new opportunity to get back on track!', 'failure'),
('Progress isn''t always linear. Learn from today and come back stronger tomorrow!', 'failure'),
('Every expert was once a beginner. Keep going, you''ve got this!', 'failure'),
('One day doesn''t define your journey. Focus on consistency, not perfection.', 'failure'),
('Remember why you started. Tomorrow is a fresh opportunity to move forward!', 'failure');

-- Enable realtime for the table
alter publication supabase_realtime add table motivational_messages;

-- Create subscriptions table
CREATE TABLE IF NOT EXISTS user_subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  subscription_type VARCHAR(20) NOT NULL CHECK (subscription_type IN ('free', 'monthly', 'lifetime')),
  start_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  end_date TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable realtime for the table
alter publication supabase_realtime add table user_subscriptions;