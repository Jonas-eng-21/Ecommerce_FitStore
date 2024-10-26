package br.com.projeto.FitStore.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.com.projeto.FitStore.model.entity.Payments;
import br.com.projeto.FitStore.model.repository.PaymentsRepository;

import java.util.List;

@Service
public class PaymentsService {

    @Autowired
    private PaymentsRepository paymentsRepository;

    public List<Payments> getAllPayments() {
        return paymentsRepository.findAll();
    }

    public Payments createPayment(Payments payment) {
        return paymentsRepository.save(payment);
    }
}