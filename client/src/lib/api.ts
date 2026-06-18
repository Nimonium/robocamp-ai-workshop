export interface EnquiryData {
  name: string;
  email: string;
  phone: string;
}

export interface EnquiryResponse {
  success: boolean;
  message?: string;
  errors?: Record<string, string>;
  data?: any;
}

export const submitEnquiry = async (data: EnquiryData): Promise<EnquiryResponse> => {
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
  try {
    const response = await fetch(`${API_URL}/api/enquiry`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    const result = await response.json();
    if (!response.ok) {
      return { success: false, errors: result.errors || { server: 'An error occurred. Please try again.' } };
    }
    return result;
  } catch (error) {
    return { success: false, errors: { server: 'Network error. Please try again later.' } };
  }
};
