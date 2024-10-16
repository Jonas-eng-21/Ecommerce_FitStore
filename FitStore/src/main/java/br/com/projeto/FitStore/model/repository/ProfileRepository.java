package br.com.projeto.FitStore.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.com.projeto.FitStore.model.entity.Payments; // ou Profile
import br.com.projeto.FitStore.model.repository.ProfileRepository; // ou PaymentsRepository

import java.util.List;

@Service
public class ProfileService { // ou PaymentsService

    @Autowired
    private ProfileRepository profileRepository; // ou PaymentsRepository

    public List<Payments> getAllProfiles() { // ou getAllPayments
        return profileRepository.findAll(); // ou paymentsRepository
    }

    public Payments createProfile(Payments profile) { // ou createPayment
        return profileRepository.save(profile); // ou paymentsRepository
    }
}